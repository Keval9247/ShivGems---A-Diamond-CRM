import Link from "next/link";
import React from "react";

const sections = [
    {
        title: "Master",
        items: ["Color", "Cut", "Purity", "Polish", "Shape", "Stone", "Symmetry", "Fluorescence", "Tension", "Lab Certificate", "Ratio", "Table", "Height", "Length", "Width", "Back", "Charni", "Mix Charni",],
        route: ["color", "cut", "purity", "polish", "shape", "stone", "symmetry", "fluorescence", "tension", "lab-certificate", "ratio", "table", "height", "length", "width", "back", "charni", "mix-charni"]
    },
    // {
    //     title: "Process & Department",
    //     items: ["Process", "Department"],
    // },
    {
        title: "Users",
        items: ["Party", "Manager", "Employee", "Job Work", "Planner"],
        route: ["party", "manager", "employee", "job-work", "planner"]
    },
    // {
    //     title: "Rates",
    //     items: ["Manual Calculate", "Rapo Rates", "Majuri Alert", "Margin / Costing"],
    // },
];

const MasterBox: React.FC = () => {
    return (
        <div className="p-3 bg-gray-100 min-h-screen scrollbar-hidden">

            {sections.map((section, index) => (
                <div key={index} className="mb-8">
                    {/* Section Title */}
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">{section.title}</h2>

                    {/* Grid Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {section.items.map((item, i) => (
                            <Link
                                key={i}
                                href={`dashboard/${section.title.toLowerCase()}/${section.route[i]}`}
                                className="p-4 bg-white shadow rounded-lg hover:shadow-md transition-shadow flex items-center justify-center text-gray-700 font-medium text-center"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MasterBox;
