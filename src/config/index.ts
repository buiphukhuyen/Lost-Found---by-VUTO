/**
 * Parse configuration from environment (`.env` is supported).
 * Fallback to default value if not available.
 * @packageDocumentation
 */

/**
 * Parse string from environment variable
 * @param key - Environment key
 */
const parseEnvString = (key: string): string | undefined => {
  return process.env[key];
};

/**
 * Parse number from environment variable
 * @param key - Environment key
 */
const parseEnvNumber = (key: string): number | undefined => {
  if (process.env[key]) {
    return Number(process.env[key]);
  } else {
    return undefined;
  }
};

/**
 * Parse boolean from environment variable
 * @param key - Environment key
 */
const parseEnvBoolean = (key: string): boolean | undefined => {
  if (process.env[key]) {
    return String(process.env[key]).toLowerCase() === "true";
  } else {
    return undefined;
  }
};

export interface ConfigProps {
  MAINTENANCE: boolean;
  GRAPH_API: string;
  APP_SECRET: string;
  PAGE_ACCESS_TOKEN: string;
  PAGE_VERIFY_TOKEN: string;
  MAX_MESSAGE_LENGTH: number;
  APP_NAME: string;
  HEROKU_API_KEY: string;
  MONGO_URI: string;
  HAS_POST_LOG: boolean;
  POST_LOG_ID: string;
  POST_LOG_P1: string;
  POST_LOG_P2: string;
  POST_LOG_NAME1: string;
  POST_LOG_NAME2: string;
  REPORT_LINK: string;
  MAX_PEOPLE_IN_WAITROOM: number;
  MAX_WAIT_TIME_MINUTES: number;
  ADMIN_PASSWORD: string;
  MAX_SESSION_MINUTES: number;
  DEV_ID: string;
  VERSION: string;
}

export default {
  // Maintenance mode
  MAINTENANCE: parseEnvBoolean("MAINTENANCE") || false,

  // Graph API
  GRAPH_API: parseEnvString("GRAPH_API") || "https://graph.facebook.com/v7.0",

  // App secret
  APP_SECRET:
    parseEnvString("APP_SECRET") || "b0fe6aebe4e8f345cc8ce0fcb43b8a65",

  // Page access token
  PAGE_ACCESS_TOKEN:
    parseEnvString("PAGE_ACCESS_TOKEN") ||
    "EAAEpIvH47LIBAK3lHGsm574BfxvrQ0QroKyZAhmA8ZB8aXOobyKNtxHVPDjXpAuZAhSkDagMwgrY4XhOIoz5bCK4FnAZAc4jIMPBUomwUZCZCN8ASZBkNdElYC6jyfvAoOWb5ppJZCeMUeYFFUL3DySsthzlkI6H81fYXKlZBDdIOGD3OxmhzXGZBdN9TZBw19hkxIZD",

  // Page verify token
  PAGE_VERIFY_TOKEN: parseEnvString("PAGE_VERIFY_TOKEN") || "khuyenpb",

  // Maximum length of text message
  MAX_MESSAGE_LENGTH: parseEnvNumber("MAX_MESSAGE_LENGTH") || 2000,

  // App name (must be the same on Heroku)
  APP_NAME: parseEnvString("APP_NAME") || "lost-found-by-vuto",

  // Heroku API key
  HEROKU_API_KEY:
    parseEnvString("HEROKU_API_KEY") || "8c0ac96f-59ad-4fb1-8523-aa5de2fdd6fc",

  // URI to MongoDB server
  MONGO_URI:
    parseEnvString("MONGO_URI") ||
    "mongodb+srv://khuyenpb:0333093935hutech@cluster0.2hegh.mongodb.net/lostfound?retryWrites=true&w=majority",

  // Logging stuffs
  HAS_POST_LOG: parseEnvBoolean("HAS_POST_LOG") || true,
  POST_LOG_ID:
    parseEnvString("POST_LOG_ID") ||
    "1FAIpQLSfhQjxfruJHLfItCAUzaK_vs4q2QtDZFM9HMnclV7nkdWNTcw",
  POST_LOG_P1: parseEnvString("POST_LOG_P1") || "2012584804",
  POST_LOG_P2: parseEnvString("POST_LOG_P2") || "857388838",
  POST_LOG_NAME1: parseEnvString("POST_LOG_NAME1") || "868192852",
  POST_LOG_NAME2: parseEnvString("POST_LOG_NAME2") || "1595389381",

  // Link to Google Form for reporting
  REPORT_LINK:
    parseEnvString("REPORT_LINK") || "https://forms.gle/NMfVivhiw5HVjPjL6",

  // Maximum number of people in wait room
  MAX_PEOPLE_IN_WAITROOM: parseEnvNumber("MAX_PEOPLE_IN_WAITROOM") || 30,

  // Maximum amount of time in wait room
  // 0 for unlimited
  MAX_WAIT_TIME_MINUTES: parseEnvNumber("MAX_WAIT_TIME_MINUTES") || 15,

  // Password to log into admin page
  ADMIN_PASSWORD: parseEnvString("ADMIN_PASSWORD") || "lostfoundbyvuto",

  // Maximum amount of time of a session
  // 0 for unlimited
  MAX_SESSION_MINUTES: parseEnvNumber("MAX_SESSION_MINUTES") || 300, // Thời gian 1 session

  // ID of developer's Facebook account
  DEV_ID: parseEnvString("DEV_ID") || "107155444423186",

  // Project version. You don't need to set this.
  VERSION: require("../../package.json").version,
} as ConfigProps;
