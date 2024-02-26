import "dotenv/config";

export default {
  "expo": {
    "name": "navegacion-react-native",
    "slug": "navegacion-react-native",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.oluciani.react_native_firebase"
    },
    "android": {
      "package": "com.oluciani.react_native_firebase",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey:process.env.API_KEY,
      authDomain:process.env.AUTH_DOMAIN,
      projectId:process.env.PROJECT_ID,
      storageBucket:process.env.STORAGE_BUCKET,
      messagingSenderId: process.env['MESSAGING_SENDER-ID'],
      appId:process.env.APP_ID,
      eas: {
        projectId: "a2704793-78db-46b6-b5c2-29be72292645"
      }
    },
    scheme: "navegacion-react-native"
  }
}
