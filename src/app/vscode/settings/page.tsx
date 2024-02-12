import { GistContent } from "@/components/GistContent";

export const metadata = {
  title: "VSCode Settings",
};

export default async function Settings() {
  return (
    <GistContent gistUrl="https://gist.githubusercontent.com/davimoreira24/a963afd15238219d6dad46955cea5f97/raw/ff8120a86b9c572b78713c7ac4c2af4168bac11a/settings.json" />
  );
}
