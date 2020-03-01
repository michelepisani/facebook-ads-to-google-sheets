var CLIENT_ID = 'APP_ID'; // App ID                                        
var CLIENT_SECRET = 'APP_SECRET'; // App Secret
var FB_AD_ACCOUNT_ID = 'ACCOUNT_ID'; // Ad Account Id

var FB_SERVICE = { fbService : getService_() }
var FB_ACCOUNT_TYPE = "adInsights"; // pageInsights
var FB_LEVEL = 'adset'; // ad, adset, campaign, account
var FB_LIMIT = 1000;
var FB_FIELDS = ['date_start,clicks,spend,impressions,adset_name,campaign_name']; // for pageInsights use list from ACCOUTNDATA.pageMetric
var DATE_RANGE = 'last_month'; // today, yesterday, this_month, last_month, this_quarter, lifetime, last_3d, last_7d, last_14d, last_28d, last_30d, last_90d, last_week_mon_sun, last_week_sun_sat, last_quarter, last_year, this_week_mon_today, this_week_sun_today, this_year
//Parameters: https://developers.facebook.com/docs/marketing-api/insights/parameters/v2.7

var SOURCE = "facebook"; // source, if not specified in Facebook Tracking URL Params utm_source
var MEDIUM = "display"; // medium, if not specified in Facebook Tracking URL Params utm_medium
var GA_SCHEMA = ["ga:date","ga:medium","ga:source","ga:adClicks","ga:adCost","ga:impressions","ga:adGroup","ga:campaign"];
