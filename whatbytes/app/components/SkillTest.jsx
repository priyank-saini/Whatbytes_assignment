"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "react-minimal-pie-chart";

function HtmlBar({ icon, heading, content, button, onClick }) {
  return (
    <div className="flex flex-row gap-5 items-center px-6 py-3 border-blue-100 border rounded">
      <Image src={icon} width={80} height={20} />

      <div className="flex flex-col gap-2">
        <p className="font-bold text-lg">{heading}</p>
        <p className="text-sm">{content}</p>
      </div>

      <button
        onClick={onClick}
        className="bg-blue-800 text-white font-bold px-8 h-10 rounded-lg"
      >
        {button}
      </button>
    </div>
  );
}

function StatisticsBar({ rank, percentile, score, width, height }) {
  return (
    <div className="flex flex-col gap-5 px-6 py-3 border-blue-100 border rounded">
      <p className="font-bold">Quick Statistics</p>

      <div className="flex flex-row gap-10">
        <div className="flex flex-row gap-5 justify-center">
          <Image src="/rank.png" width={width} height={height} />

          <div className="flex flex-col gap-1">
            <p className="font-bold">{rank}</p>
            <p className="text-gray-600 text-sm">YOUR RANK</p>
          </div>
        </div>

        <div className="flex flex-row gap-5 justify-center">
          <Image src="/percentile.png" width={width} height={height} />

          <div className="flex flex-col gap-1">
            <p className="font-bold">{percentile}%</p>
            <p className="text-gray-600 text-sm">PERCENTILE</p>
          </div>
        </div>

        <div className="flex flex-row gap-5 justify-center">
          <Image src="/correct.png" width={width} height={height} />

          <div className="flex flex-col gap-1">
            <p className="font-bold">{score}/15</p>
            <p className="text-gray-600 text-sm">CORRECT ANSWERS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComparisonGraph({ percentile }) {
  return (
    <div className="flex flex-col gap-5 px-6 py-3 border-blue-100 border rounded">
      <p className="font-bold">Comparison Graph</p>

      <p>
        <span className="font-bold"> You scored {percentile}% percentile </span>
        which is lower than the average percentile 72% of all engineers who took
        this assessment
      </p>

      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 30, 60, Number(percentile), 94, 100],
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
}

function SyllabusWiseAnalysis({ p1, p2, p3, p4 }) {
  return (
    <div className="flex flex-col gap-5 px-6 py-3 border-blue-100 border rounded">
      <p className="font-bold">Syllabus Wise Analysis</p>

      <div className="flex flex-col gap-5">
        <p>Html Tools, Forms, History</p>

        <div className="flex justify-between w-[80%] items-center">
          <div className="w-[70%] h-[10px] rounded-lg bg-blue-800"></div>
          <p className="text-blue-800 font-semibold">80%</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p>Tags and Refrences in Html</p>

        <div className="flex justify-between w-[80%] items-center">
          <div className="w-[70%] h-[10px] rounded-lg bg-orange-500"></div>
          <p className="text-blue-800 font-semibold">60%</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p>Tables and Refrences in Html</p>

        <div className="flex justify-between w-[80%] items-center">
          <div className="w-[70%] h-[10px] rounded-lg bg-red-500"></div>
          <p className="text-blue-800 font-semibold">24%</p>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <p>Tables and CSS basics</p>

        <div className="flex justify-between w-[80%] items-center">
          <div className="w-[70%] h-[10px] rounded-lg bg-green-500"></div>
          <p className="text-blue-800 font-semibold">80%</p>
        </div>
      </div>
    </div>
  );
}

const QuestionAnalysis = ({ questions }) => {
  return (
    <div className="flex flex-col gap-5 px-6 py-3 border border-blue-100 rounded items-center">
      <div className="flex w-full justify-between">
        <p className="font-bold">Question Analysis</p>
        <p className="font-bold text-blue-800">{questions}/15</p>
      </div>

      <p>
        <span className="font-bold">You scored {questions} questions</span>{" "}
        correct out of 15. However, it still needs some improvement.
      </p>

      <PieChart
        className="w-[250px] h-[250px]"
        data={[
          { title: "One", value: Number(questions), color: "#1AACAC" },
          { title: "Two", value: 15 - Number(questions), color: "#F0F0F0" },
        ]}
      />
    </div>
  );
};

const UpdateScoresModal = ({ isOpen, onClose, onSave }) => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [score, setScore] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    const data = {
      rank,
      percentile,
      score,
    };
    onSave(data);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="flex items-center justify-center fixed inset-0 bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      ariaHideApp={false}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-120 mx-auto my-auto">
        <h2 className="text-xl font-bold mb-4">Update Scores</h2>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <label className="w-1/2 font-semibold" htmlFor="rank">
              Update your rank
            </label>
            <input
              id="rank"
              type="text"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
              className="border p-2 flex-1 rounded"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/2 font-semibold" htmlFor="percentile">
              Update your percentile
            </label>
            <input
              id="percentile"
              type="text"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
              className="border p-2 flex-1 rounded"
            />
          </div>
          <div className="flex items-center">
            <label className="w-1/2 pr-5 font-semibold" htmlFor="score">
              Update your current score out of 15
            </label>
            <input
              id="score"
              type="text"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="border p-2 flex-1 rounded"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
};

function SkillTest() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [scores, setScores] = useState({
    rank: "3",
    percentile: "98",
    score: "11",
  });

  const handleSave = (data) => {
    console.log("Saved data:", data);
    setScores(data);
  };

  return (
    <main>
      <div className="flex flex-col gap-10">
        <p className="text-lg">Skill Test</p>

        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-10">
            <HtmlBar
              icon="/html-5.png"
              heading="Hyper Text Markup Language"
              content={`Questions: ${scores.score} | Duration: 15 min | Submitted on 5 June 2021`}
              button="Update"
              onClick={() => setIsModalOpen(true)}
            />
            <StatisticsBar
              width={50}
              height={10}
              rank={scores.rank}
              percentile={scores.percentile}
              score={scores.score}
            />
            <ComparisonGraph percentile={scores.percentile} />
          </div>

          <div className="flex flex-col gap-10">
            <SyllabusWiseAnalysis />
            <QuestionAnalysis questions={scores.score} />
          </div>
        </div>
      </div>
      <UpdateScoresModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </main>
  );
}

export default SkillTest;
