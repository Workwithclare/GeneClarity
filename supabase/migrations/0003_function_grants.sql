-- GeneClarity — function grants (run AFTER 0002_grants.sql)
-- Lets the API roles call the consent-helper function used by the
-- Row Level Security policies on results/notifications.

grant execute on all functions in schema public to anon, authenticated;

alter default privileges in schema public
  grant execute on functions to anon, authenticated;
