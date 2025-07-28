// This file is only for web platform
import 'dart:html' as html;

void reloadPage() {
  html.window.location.reload();
}

void reloadPageAfterDelay([int seconds = 2]) {
  Future.delayed(Duration(seconds: seconds), () {
    html.window.location.reload();
  });
}
