import { HomeJumbotron } from "@/modules/home/jumbotron";
import { HomeService } from "@/modules/home/service";

export default function Home() {
  return (
    <main>
      <HomeJumbotron />
      <HomeService />
      <div className="pb-20" />
    </main>
  );
}
