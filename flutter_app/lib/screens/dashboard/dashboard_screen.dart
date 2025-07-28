// Used to segregate pages from web and mobile

export 'dashboard_screen_stub.dart'
    if (dart.library.html) 'dashboard_screen_web.dart'
    if (dart.library.io) 'dashboard_screen_mobile.dart';
