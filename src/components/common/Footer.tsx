import { Clock, Link, University } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground grid grid-cols-4 items-center justify-between gap-10 p-10">
      <div className="col-span-1 flex flex-col gap-2">
        <Image src="/logo.png" alt="logo" width={74} height={74} />
        <h1 className="text-3xl">the Nexus</h1>
      </div>
      <div className="col-span-3 flex gap-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <University />
            <h1 className="text-xl font-medium">New Main Library</h1>
          </div>
          <h1>
            New Era University, No.9 Central Avenue,New Era,Quezon City 1107
            Quezon City National Capital Region
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Clock />
            <h1 className="text-xl font-medium">Library Hours</h1>
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et
            dolorum odio.
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Link />
            <h1 className="text-xl font-medium">Links</h1>
          </div>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi a
            optio rerum!
          </h1>
        </div>
      </div>
    </footer>
  );
};
