"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormData {
  name: string;
  email: string;
  phone: string;
  timeFrame: string;
  size: string;
  quantity: string;
  description: string;
  projectType: string;
}

const Section7: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    timeFrame: "",
    size: "",
    quantity: "",
    description: "",
    projectType: "",
  });

  const formik = useFormik<FormData>({
    initialValues: formData,
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email format").required("Required"),
      phone: Yup.string()
        .matches(/^\d+$/, "Invalid phone number format")
        .required("Required"),
      timeFrame: Yup.string().required("Required"),
      size: Yup.string().required("Required"),
      quantity: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      projectType: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
    },
  });

  return (
    <div className="container mt-14 mx-auto py-24">
      <h2 className="text-2xl font-bold mb-4 text-center">REQUEST A QUOTE</h2>
      <div className="mt-24">
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : ""
              }`}
              required
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : ""
              }`}
              required
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500">{formik.errors.phone}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="timeFrame"
              className="block text-gray-700 font-bold mb-2"
            >
              Time Frame
            </label>
            <select
              id="timeFrame"
              name="timeFrame"
              value={formik.values.timeFrame}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.timeFrame && formik.errors.timeFrame
                  ? "border-red-500"
                  : ""
              }`}
              required
            >
              <option value="">Choose Time Frame</option>
              <option value="1-week">1 Week</option>
              <option value="2-weeks">2 Weeks</option>
            </select>
            {formik.touched.timeFrame && formik.errors.timeFrame && (
              <div className="text-red-500">{formik.errors.timeFrame}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="size"
              className="block text-gray-700 font-bold mb-2"
            >
              Size
            </label>
            <select
              id="size"
              name="size"
              value={formik.values.size}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.size && formik.errors.size
                  ? "border-red-500"
                  : ""
              }`}
              required
            >
              <option value="">Choose Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            {formik.touched.size && formik.errors.size && (
              <div className="text-red-500">{formik.errors.size}</div>
            )}
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Quantity
            </label>
            <select
              id="quantity"
              name="quantity"
              value={formik.values.quantity}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.quantity && formik.errors.quantity
                  ? "border-red-500"
                  : ""
              }`}
              required
            >
              <option value="">Choose Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            {formik.touched.quantity && formik.errors.quantity && (
              <div className="text-red-500">{formik.errors.quantity}</div>
            )}
          </div>
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
            Please Describe Your Project{" "}
            </label>
            {" "}
            <textarea
              id="description"
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={4} 
              className={`w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formik.touched.description && formik.errors.description
                  ? "border-red-500"
                  : ""
              }`}
              required
            ></textarea>
            {" "}
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500">{formik.errors.description}</div>
            )}
            {" "}
          </div>
          {" "}
          <div className="md:col-span-2">
            {" "}
            <p className="text-center text-gray-600 text-sm mb-4">
               By submitting this form you agree to our {" "}
              <a href="#" className="text-blue-500 hover:underline">terms of Service{" "}
              </a>{" "} and {" "}
              <a href="#" className="text-blue-500 hover:underline">
               Privacy Policy {" "}
              </a>
              {" "}
            </p>
            {" "}
            <div className="text-center">
              {" "}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md hover:scale-105 hover:-translate-y-2"
              >
                 Loerum Ipsum → {" "}
              </button>
              {" "}
            </div>
            {" "}
          </div>
        {" "}
        </form>
      {" "}
      </div>
      {" "}
    </div>
  );
};

export default Section7;
