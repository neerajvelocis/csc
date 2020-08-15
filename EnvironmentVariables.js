const envVariables = {
  MAX_NUMBER_PAGES: process.env.MAX_NUMBER_PAGES || 80,
  EGOV_LOCALISATION_HOST:
    process.env.EGOV_LOCALISATION_HOST || "http://3.6.65.87:8080",
  EGOV_FILESTORE_SERVICE_HOST:
    process.env.EGOV_FILESTORE_SERVICE_HOST || "http://3.6.65.87:8080",
  SERVER_PORT: process.env.SERVER_PORT || 8080,

  KAFKA_BROKER_HOST: process.env.KAFKA_BROKER_HOST || "3.6.65.87:9092",
  KAFKA_CREATE_JOB_TOPIC: process.env.KAFKA_CREATE_JOB_TOPIC || "PDF_GEN_CREATE",
  KAFKA_RECEIVE_CREATE_JOB_TOPIC: process.env.KAFKA_RECEIVE_CREATE_JOB_TOPIC || "PDF_GEN_RECEIVE",
  DB_USER: process.env.DB_USER || "postgres",
  DB_PASSWORD: process.env.DB_PASSWORD || "CaOTu26/mORaOi2~",
  DB_HOST: process.env.DB_HOST || "3.6.65.87",
  DB_NAME: process.env.DB_NAME || "devdb",
  DB_PORT: process.env.DB_PORT || 5432,
  DEFAULT_LOCALISATION_LOCALE: process.env.DEFAULT_LOCALISATION_LOCALE || "en_IN",
  DEFAULT_LOCALISATION_TENANT: process.env.DEFAULT_LOCALISATION_TENANT || "ch",
  DATA_CONFIG_URLS: 'https://raw.githubusercontent.com/neerajvelocis/csc/dev/data-config-bk-payment.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/data-config-bk-osbm-pl.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/data-config-bk-osbm-app-form.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/data-config-bk-wt-app-form.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/data-config-bk-wt-unpaid-app-form.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/data-config-bk-cg-pl.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/data-config-bk-cg-app-form.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/OSWMCC/data-config-bk-oswmcc-newloc-app-form.json',
  FORMAT_CONFIG_URLS: 'https://raw.githubusercontent.com/neerajvelocis/csc/dev/format-config-bk-payment.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/format-config-bk-osbm-pl.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/format-config-bk-osbm-app-form.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/format-config-bk-wt-app-form.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/format-config-bk-wt-unpaid-app-form.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/format-config-bk-cg-pl.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/format-config-bk-cg-app-form.json,https://raw.githubusercontent.com/neerajvelocis/csc/dev/OSWMCC/format-config-bk-oswmcc-newloc-app-form.json'
  
};
export default envVariables;
