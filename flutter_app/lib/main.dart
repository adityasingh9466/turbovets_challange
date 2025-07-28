import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';
import 'package:provider/provider.dart';
import 'package:turbovets_flutter_challange/services/local_notification.dart';

import 'app.dart';
import 'models/chat_message.dart';
import 'models/message_type_adapter.dart';
import 'providers/theme_provider.dart';
import 'utils/platform_utils.dart';

void main() async {
  try {
    WidgetsFlutterBinding.ensureInitialized();

    // Initialize notifications
    await LocalNotification().initializeNotifications();
    await LocalNotification().requestNotificationPermissionIfNeeded();

    if (kIsWeb) {
      Hive.init('hive_db');

      await Future.delayed(const Duration(milliseconds: 150));
    } else {
      await Hive.initFlutter();
    }

    // Register adapters with safety checks
    try {
      if (!Hive.isAdapterRegistered(0)) {
        Hive.registerAdapter(ChatMessageAdapter());
      }
      if (!Hive.isAdapterRegistered(1)) {
        Hive.registerAdapter(MessageTypeAdapter());
      }
    } catch (e) {
      debugPrint('Adapter registration error: $e');
    }

    // Open Hive box
    await Hive.openBox<ChatMessage>('chatMessages');

    runApp(
      ChangeNotifierProvider(
        create: (_) => ThemeProvider(),
        child: const ChatApp(),
      ),
    );
  } catch (e) {
    debugPrint('App initialization error: $e');

    if (kIsWeb) {
      PlatformUtils.reloadAppWithDelay(3);
    }

    runApp(
      MaterialApp(
        title: 'TurboVets Flutter Project',
        home: Builder(
          builder: (context) => Scaffold(
            appBar: AppBar(
              title: const Text('Loading...'),
              backgroundColor: Colors.blue,
              foregroundColor: Colors.white,
            ),
            body: Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const CircularProgressIndicator(),
                  const SizedBox(height: 20),
                  Text(
                    'Initializing app...',
                    style: Theme.of(context).textTheme.bodyLarge,
                  ),
                  const SizedBox(height: 20),
                  if (PlatformUtils.canAutoReload) ...[
                    Text(
                      'Auto-reloading in 3 seconds...',
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                    const SizedBox(height: 10),
                    const LinearProgressIndicator(),
                    const SizedBox(height: 20),
                  ] else
                    Text(
                      'Please restart the app manually',
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  const SizedBox(height: 20),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      if (PlatformUtils.canAutoReload)
                        ElevatedButton(
                          onPressed: () {
                            PlatformUtils.reloadApp();
                          },
                          child: const Text('Reload Now'),
                        ),
                      const SizedBox(width: 10),
                      OutlinedButton(
                        onPressed: () {
                          ScaffoldMessenger.of(context).showSnackBar(
                            SnackBar(
                              content: Text(
                                kIsWeb
                                    ? 'Press Ctrl+R (or Cmd+R on Mac) to refresh'
                                    : 'Close and reopen the app',
                              ),
                              duration: const Duration(seconds: 4),
                            ),
                          );
                        },
                        child: const Text('Help'),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
