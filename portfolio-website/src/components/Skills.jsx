import React from 'react'
import { GiSkills } from "react-icons/gi";

const Skills = () => {
    return (
        <div className="bg-base-200 py-10">
            <h1 className="text-4xl font-bold text-center text-[oklch(var(--n))] pb-5">Skills</h1>
            <div className="w-1/2 mx-10">
                <div className="flex space-x-4">
                    <div className="mockup-code bg-neutral w-1/2 mb-2">
                        <pre data-prefix="1"><code className="text-neutral-content">def skills():</code></pre>
                        <pre data-prefix="2"><code className="text-neutral-content">  print("Python!")</code></pre>
                        <pre data-prefix="3"><code className="text-neutral-content"></code></pre>
                    </div>
                    <div className="mockup-code bg-neutral w-1/2 mb-2">
                        <pre data-prefix="1"><code className="text-neutral-content">{"const Skills = () => {"}</code></pre>
                        <pre data-prefix="2"><code className="text-neutral-content">  console.log("JavaScript!")</code></pre>
                        <pre data-prefix="3"><code className="text-neutral-content">{"}"}</code></pre>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className="mockup-code bg-neutral w-1/2 mb-2">
                        <pre data-prefix="1"><code className="text-neutral-content">{"#include <stdio.h>"}</code></pre>
                        <pre data-prefix="2"><code className="text-neutral-content"></code></pre>
                        <pre data-prefix="3"><code className="text-neutral-content">printf("C!");</code></pre>
                    </div>
                    <div className="mockup-code bg-neutral w-1/2 mb-2">
                        <pre data-prefix="1"><code className="text-neutral-content">{"some other language"}</code></pre>
                        <pre data-prefix="2"><code className="text-neutral-content"></code></pre>
                        <pre data-prefix="3"><code className="text-neutral-content"></code></pre>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills