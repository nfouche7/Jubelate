// AGS Jubelate app settings.
// Fill in supabaseUrl and supabaseAnonKey once, after creating your free Supabase project.
// In Supabase: Project Settings > API (or "API Keys"). Copy the Project URL and the
// public key ("anon public", or on newer projects the "publishable" key starting sb_publishable_).
// This key is meant to be public; the database security rules protect the church's data.
// Never paste the "service_role" / "secret" key here.
window.APP_CONFIG = {
  appName: "AGS Jubelate",
  churchName: "AGS Jubelate Meyerton",
  defaultLanguage: "af",            // "af" = Afrikaans, "en" = English. Each member can switch.
  logo: "logo.png",                 // the church logo (included in the app files)
  logoFallback: "https://jubelate.co.za/wp-content/uploads/2024/08/Web_Logo-300x300.jpg",
  tagline: { af: "Ekstaties en uitverkoop vir Jesus", en: "Ecstatic and sold out for Jesus" },
  address: "H/v Manie Steynstraat en Pierneef Boulevard, Meyerton, 1961",
  phone: "+27 16 362 4449",
  email: "info@jubelate.co.za",
  website: "https://jubelate.co.za",
  pastor: { name: "Pastoor Marius", phone: "084 597 0248" },
  facebook: "https://www.facebook.com/agsmeyerton/",
  youtube: "https://www.youtube.com/@agsmeyerton8893",
  mapsQuery: "AGS Jubelate, Manie Steyn Street and Pierneef Boulevard, Meyerton, 1961",
  supabaseUrl: "https://jpxlkwbumyptxftwfdru.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpweGxrd2J1bXlwdHhmdHdmZHJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzNjgzMTQsImV4cCI6MjEwNzk0NDMxNH0.UzJdYUgV7n3EbigI0SMOzZc6-aOGa6k4RdqOzJs1hlw"
};
