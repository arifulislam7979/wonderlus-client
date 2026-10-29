"use client";

import React, { useState } from "react";
import { Trash2, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { getTokenFromClient } from "@/lib/getTokenClient";
import { toast } from "sonner";

const DestinationPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    destinationName: "",
    country: "",
    category: "Beach",
    price: "",
    duration: "",
    departureDate: "",
    imageUrl: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const newData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = await getTokenFromClient()

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/add-destination`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (result.insertedId) {
      toast.success('Add Successfully')
      router.push("/all-destination");
    }
  };

  const handleCancel = () => {
    setFormData({
      destinationName: "",
      country: "",
      category: "Beach",
      price: "",
      duration: "",
      departureDate: "",
      imageUrl: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* PAGE TITLE */}
        <h1 className="text-4xl sm:text-5xl font-serif text-gray-900 tracking-tight mb-10 text-left font-normal">
          Add New Travel Package
        </h1>

        {/* FORM CONTAINER */}
        <div className="bg-white rounded-md shadow-sm border border-gray-100 p-6 sm:p-10 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Destination Name */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Destination Name
              </label>
              <input
                type="text"
                name="destinationName"
                value={formData.destinationName}
                onChange={handleChange}
                placeholder="Bali Paradise"
                className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-300 focus:bg-white text-gray-800 text-sm rounded-sm p-3.5 outline-none transition"
              />
            </div>

            {/* Country & Category (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Indonesia"
                  className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-300 focus:bg-white text-gray-800 text-sm rounded-sm p-3.5 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Category
                </label>
                <div className="relative">
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-300 focus:bg-white text-gray-700 text-sm rounded-sm p-3.5 outline-none appearance-none cursor-pointer transition"
                  >
                    <option value="Beach">Beach</option>
                    <option value="Mountain">Mountain</option>
                    <option value="City">City</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Historical">Historical</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Price & Duration (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Price (USD)
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="e.g., 1299"
                  className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-300 focus:bg-white text-gray-800 text-sm rounded-sm p-3.5 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-800 mb-2">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  placeholder="e.g., 7 Days/6 Nights"
                  className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-300 focus:bg-white text-gray-800 text-sm rounded-sm p-3.5 outline-none transition"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Departure Date
              </label>
              <input
                type="date"
                name="departureDate"
                value={formData.departureDate}
                onChange={handleChange}
                className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-300 focus:bg-white text-gray-500 text-sm rounded-sm p-3.5 outline-none transition uppercase"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Image URL
              </label>
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-300 focus:bg-white text-gray-800 text-sm rounded-sm p-3.5 outline-none transition"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-800 mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the travel experience..."
                className="w-full bg-[#f8f9fa] border border-transparent focus:border-gray-300 focus:bg-white text-gray-800 text-sm rounded-sm p-3.5 outline-none resize-none transition"
              ></textarea>
            </div>

            {/* BUTTON ACTIONS */}
            <div className="flex items-center justify-end gap-3 pt-4">
              {/* Cancel Button */}
              <button
                type="button"
                onClick={handleCancel}
                className="border border-red-400 text-red-500 hover:bg-red-50 font-medium text-xs rounded-sm px-5 py-3 transition flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4 text-red-500" />
                Cancel
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#00a8cc] hover:bg-[#0091b0] text-white font-medium text-xs rounded-sm px-5 py-3 transition flex items-center gap-2 shadow-sm"
              >
                <Save className="w-4 h-4" />
                Add Travel Package
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
