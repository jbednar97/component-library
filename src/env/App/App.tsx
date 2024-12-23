import type { FC } from "react";

import { Button, PAYGCard } from "@/lib";
import "./index.css";

const App: FC = () => {
    return (
        <div className="flex flex-col gap-2">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="secondary">Secondary</Button>
            <div className="w-[300px]">
                <PAYGCard />
            </div>
        </div>
    );
};

export default App;
