import React, { useEffect } from "react";
import { FaRegFileAlt } from "react-icons/fa";

const DroughtReady = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="app-container mt-32 mx-12 flex flex-col gap-8">
      <>
        <h1 className="font-bold text-4xl text-center mb-16">
          Drought Response Plan
        </h1>
      </>
      <div className="flex flex-wrap gap-4">
        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Assessment of Water Resources:
          </h2>
          <ul>
            <li>Evaluate the current state of water sources and reservoirs.</li>
            <li>Determine the impact of the drought on groundwater levels.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Water Conservation Measures:
          </h2>
          <ul>
            <li>Implement water conservation programs and campaigns.</li>
            <li>
              Encourage efficient water use in homes, agriculture, and
              industries.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Crop Diversification and Rotation:
          </h2>
          <ul>
            <li>
              Promote crop diversification and rotation to reduce water demand.
            </li>
            <li>Support the cultivation of drought-resistant crops.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Drought-Resistant Farming Techniques:
          </h2>
          <ul>
            <li>
              Educate farmers on sustainable and water-efficient farming
              practices.
            </li>
            <li>
              Introduce technologies like drip irrigation and rainwater
              harvesting.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Livestock Management:
          </h2>
          <ul>
            <li>
              Develop strategies for managing livestock during drought periods.
            </li>
            <li>
              Promote sustainable grazing practices and supplemental feeding.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Emergency Food and Water Distribution:
          </h2>
          <ul>
            <li>
              Establish emergency food and water distribution centers for
              affected communities.
            </li>
            <li>
              Ensure access to clean drinking water and nutritional support.
            </li>
          </ul>
        </section>
        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Early Warning Systems:
          </h2>
          <ul>
            <li>Develop and enhance early warning systems for drought.</li>
            <li>Provide timely information to communities for preparedness.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Education and Awareness Programs:
          </h2>
          <ul>
            <li>Conduct public awareness campaigns on water conservation.</li>
            <li>Educate communities on drought-resistant practices.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Infrastructure for Water Storage:
          </h2>
          <ul>
            <li>
              Invest in infrastructure for water storage and rainwater
              harvesting.
            </li>
            <li>Develop or enhance reservoirs and dams for water retention.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Reforestation and Erosion Control:
          </h2>
          <ul>
            <li>
              Undertake reforestation projects to maintain ecosystem balance.
            </li>
            <li>
              Implement erosion control measures to prevent soil degradation.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Government Policies and Regulations:
          </h2>
          <ul>
            <li>Enforce and strengthen regulations on water usage.</li>
            <li>Develop policies that promote sustainable water management.</li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Research and Innovation:
          </h2>
          <ul>
            <li>
              Support research on drought-resistant crops and technologies.
            </li>
            <li>
              Invest in innovative solutions for water conservation and
              management.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Community Resilience Building:
          </h2>
          <ul>
            <li>
              Train communities in water-efficient practices and drought
              preparedness.
            </li>
            <li>
              Foster a sense of community responsibility for water conservation.
            </li>
          </ul>
        </section>

        <section className="p-12 w-fit border border-gray-200 rounded-lg">
          <h2 className="text-lg font-bold mb-2 flex  items-center ">
            <FaRegFileAlt className="mr-3" />
            Emergency Response Planning:
          </h2>
          <ul>
            <li>
              Develop and update emergency response plans for drought
              situations.
            </li>
            <li>
              Coordinate with relevant agencies for effective response efforts.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DroughtReady;
