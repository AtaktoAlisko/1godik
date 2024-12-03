"use client";

import { useState } from "react";
import axios from "axios";

export default function BirthdayRSVP() {
  const [attendance, setAttendance] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "" || attendance === "") {
      setError("Пожалуйста, заполните все поля.");
      return;
    }
    setError("");
    setSuccessMessage("");

    // Подготовка данных для отправки
    const payload = new URLSearchParams();
    payload.append("name", name);
    payload.append(
      "attendance",
      attendance === "Приду" ? "Келемін" : "Келе алмаймын"
    );

    setLoading(true);
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbxCoQLnJIwVk5h21ZtINTyHOCG6yoG8OuqG0ffA_ZqWg8bi69j76o4pNX1HDGiH0eg4_w/exec",
        payload,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      setSuccessMessage("Ваш ответ был успешно отправлен!");
      setAttendance("");
      setName("");
      setLoading(false);
    } catch (error: unknown) {
      console.error("Ошибка при отправке формы:", error);
      if (axios.isAxiosError(error)) {
        setError(`Произошла ошибка: ${error.response?.data || error.message}`);
      } else {
        setError(`Произошла неизвестная ошибка: ${(error as Error).message}`);
      }
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md px-4">
        <div className="flex flex-col text-center font-georgia">
          <div className="mb-4 mt-3 text-xl uppercase kurmet">
            Придете ли вы на день рождения?
          </div>
          <div className="mt-2 flex flex-col items-center">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Ваше имя"
              onChange={(e) => setName(e.target.value)}
              className="h-10 w-full max-w-[85%] rounded-3xl bg-[#FAFAFA] px-3 text-lg outline-none"
            />

            <div className="mt-4 flex w-full max-w-[85%] items-center justify-start">
              <input
                type="radio"
                id="willAttend"
                name="attendance"
                value="Приду"
                checked={attendance === "Приду"}
                onChange={() => setAttendance("Приду")}
                className="h-5 w-5 flex-shrink-0"
              />
              <label
                htmlFor="willAttend"
                className="ml-2 w-full max-w-[85%] flex-shrink-0 text-left"
              >
                ДА, ПРИДУ
              </label>
            </div>
            <div className="mt-3 flex w-full max-w-[85%] items-center justify-start">
              <input
                type="radio"
                id="cannotAttend"
                name="attendance"
                value="Не приду"
                checked={attendance === "Не приду"}
                onChange={() => setAttendance("Не приду")}
                className="h-5 w-5 flex-shrink-0"
              />
              <label
                htmlFor="cannotAttend"
                className="ml-2 w-full flex-shrink-0 text-left"
              >
                К СОЖАЛЕНИЮ, НЕ ПРИДУ
              </label>
            </div>
            {error && (
              <div className="mt-3 w-full max-w-[85%] text-left text-red-500">
                {error}
              </div>
            )}
            {successMessage && (
              <div className="mt-3 w-full max-w-[85%] text-left text-green-500">
                {successMessage}
              </div>
            )}
            <button
              type="submit"
              className="mt-8 h-10 w-full max-w-[85%] rounded-3xl bg-[#98761A] px-2 text-lg text-[#FFFFFF] drop-shadow-lg"
              disabled={isLoading}
            >
              {isLoading ? "Отправляется..." : "Отправить"}
            </button>
          </div>
        </div>
      </form>
      <div className="mb-10 mt-16 flex flex-col text-center font-xxx text-2xl leading-relaxed kurmet">
        Приходите, <br /> мы вас ждем <br /> на нашем празднике!
      </div>
    </>
  );
}
