import React, { useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const FloodsReady = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app-container mt-32 mx-12 flex flex-col gap-8">
      <h1 className="font-bold text-4xl text-center mb-16">
        Flood Response Plan
      </h1>
      <div className="flex flex-wrap gap-4">
        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Immediate Safety Assessment :
          </h2>
          <ul>
            <li className="">
              Prioritize safety by checking for injuries and providing first
              aid.
            </li>
            <li>Evacuate to higher ground if floodwaters are still rising.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Communication and Coordination:
          </h2>
          <ul>
            <li>
              Establish communication with emergency services, neighbors, and
              community members.
            </li>
            <li>
              Share information about the extent of flooding and immediate
              needs.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Structural Assessment:
          </h2>
          <ul>
            <li>
              Inspect buildings for flood damage, focusing on structural
              integrity.
            </li>
            <li>Label buildings as safe, unsafe, or potentially unsafe.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Utilities Check:
          </h2>
          <ul>
            <li>
              Shut off gas and electricity in flooded areas to prevent hazards.
            </li>
            <li>
              Inspect water supply for contamination and electrical systems for
              damage.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Temporary Shelter:
          </h2>
          <ul>
            <li>Set up temporary shelters for those displaced by the flood.</li>
            <li>
              Provide basic necessities like clean water, food, and sanitation.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Community Support:
          </h2>
          <ul>
            <li>
              Mobilize community resources for collective recovery efforts.
            </li>
            <li>
              Establish a support system for vulnerable populations affected by
              the flood.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Floodplain Management:
          </h2>
          <ul>
            <li>
              Implement and enforce effective floodplain management regulations.
            </li>
            <li>
              Restrict new development in flood-prone areas and encourage
              sustainable land use.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Early Warning Systems:
          </h2>
          <ul>
            <li>Invest in and maintain early warning systems for floods.</li>
            <li>
              Educate the public on response actions upon receiving flood
              warnings.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Infrastructure Resilience:
          </h2>
          <ul>
            <li>
              Upgrade critical infrastructure (roads, bridges, levees) to
              withstand floods.
            </li>
            <li>
              Implement measures to ensure continuous services during and after
              floods.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Insurance and Financial Preparedness:
          </h2>
          <ul>
            <li>Encourage and educate individuals on flood insurance.</li>
            <li>Establish financial mechanisms for post-flood recovery.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Vegetative and Natural Solutions:
          </h2>
          <ul>
            <li>
              Promote green infrastructure such as planting trees and creating
              vegetative buffers.
            </li>
            <li>Use natural solutions to absorb and redirect floodwaters.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Education and Awareness Programs:
          </h2>
          <ul>
            <li>Conduct community-wide flood preparedness programs.</li>
            <li>
              Educate residents on evacuation routes, emergency shelters, and
              flood safety.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Regular Drills and Exercises:
          </h2>
          <ul>
            <li>
              Conduct regular flood drills to reinforce emergency response
              plans.
            </li>
            <li>Evaluate and adjust plans based on drill outcomes.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Research and Innovation:
          </h2>
          <ul>
            <li>
              Support research for innovative flood control technologies and
              materials.
            </li>
            <li>Foster innovation in urban planning for flood-prone areas.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            International Collaboration:
          </h2>
          <ul>
            <li>
              Collaborate with neighboring regions and countries on flood risk
              reduction.
            </li>
            <li>Share best practices and lessons learned from flood events.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FloodsReady;
