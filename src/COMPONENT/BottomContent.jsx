import react from "react";
import { Ruler, Tag, Intagram, } from "lucide-react";

export default function BottomContent () {
    return (
        <Selection className="bg-zinc-900 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-mono mb-8 text-center md:text-left">
                    Featured Content
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-zinc-800 rounded-lg text-blue-400 sharink-0">
                            <Ruler w-8 h-8 />
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Selection>
    );
};

