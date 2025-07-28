import 'package:flutter/foundation.dart';

// Conditional imports - this is the key!
import 'web_utils.dart' if (dart.library.io) 'mobile_utils.dart';

class PlatformUtils {
  /// Reload the app/page based on platform
  static void reloadApp() {
    if (kIsWeb) {
      reloadPage();
    } else {
      // On mobile, we can't reload programmatically
      debugPrint('Reload requested on mobile platform');
    }
  }

  /// Reload with a delay and show countdown
  static void reloadAppWithDelay([int seconds = 3]) {
    if (kIsWeb) {
      reloadPageAfterDelay(seconds);
    } else {
      debugPrint('Delayed reload requested on mobile platform');
    }
  }

  /// Get appropriate message for the platform
  static String get reloadMessage {
    return kIsWeb 
        ? 'Reloading page...' 
        : 'Please restart the app';
  }

  /// Check if automatic reload is supported
  static bool get canAutoReload => kIsWeb;
}