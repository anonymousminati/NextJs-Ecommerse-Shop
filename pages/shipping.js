import CheckoutWizard from "@/components/CheckoutWizard";
import Layout from "@/components/Layout";
import { Store } from "@/utils/Store";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Shipping() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { shippingAddress } = cart;

  useEffect(() => {
    setValue("fullName", shippingAddress.fullName);
    setValue("address", shippingAddress.address);
    setValue("city", shippingAddress.city);
    setValue("postalCode", shippingAddress.postalCode);
    setValue("country", shippingAddress.country);
  }, [setValue, shippingAddress]);

  const router = useRouter();

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: {
        fullName,
        address,
        city,
        postalCode,
        country,
      },
    });

    Cookies.set(
      "cart",
      JSON.stringify({
        ...cart,
        shippingAddress: {
          fullName,
          address,
          city,
          postalCode,
          country,
        },
      })
    );

    router.push("/payment");
  };

  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1}></CheckoutWizard>
      {/* <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Shipping Area</h1>

        <div className="mb-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            {...register("fullName", {
              required: "Please enter fullName",
            })}
            className="w-full"
            id="fullName"
            autoFocus
          ></input>
          {errors.fullName && (
            <div className="text-red-500">{errors.fullName.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            {...register("address", {
              required: "Please enter address",
              minLength: {
                value: 3,
                message: "Address is more than 2 chars",
              },
            })}
            className="w-full"
            id="address"
          ></input>
          {errors.address && (
            <div className="text-red-500">{errors.address.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="city">City</label>
          <input
            type="text"
            {...register("city", {
              required: "Please enter city",
            })}
            className="w-full"
            id="city"
          ></input>
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            {...register("postalCode", {
              required: "Please enter postal code",
            })}
            className="w-full"
            id="postalCode"
          ></input>
          {errors.postalCode && (
            <div className="text-red-500">{errors.postalCode.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            {...register("country", {
              required: "Please enter country",
            })}
            className="w-full"
            id="country"
          ></input>
          {errors.country && (
            <div className="text-red-500">{errors.country.message}</div>
          )}
        </div>

        <div className="mb-4 flex justify-between">
          <button className="primary-button">Next</button>
        </div>
      </form> */}
      <form
        className="mx-auto max-w-screen-md bg-white p-6 rounded-lg shadow-lg border"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl font-semibold">Shipping Area</h1>

        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            {...register("fullName", {
              required: "Please enter your full name",
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            id="fullName"
            autoFocus
          />
          {errors.fullName && (
            <div className="text-red-500 mt-1">{errors.fullName.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 mb-2">
            Address
          </label>
          <input
            type="text"
            {...register("address", {
              required: "Please enter your address",
              minLength: {
                value: 3,
                message: "Address must be at least 3 characters",
              },
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            id="address"
          />
          {errors.address && (
            <div className="text-red-500 mt-1">{errors.address.message}</div>
          )}
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block text-gray-700 mb-2">
              City
            </label>
            <input
              type="text"
              {...register("city", {
                required: "Please enter your city",
              })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="city"
            />
            {errors.city && (
              <div className="text-red-500 mt-1">{errors.city.message}</div>
            )}
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-gray-700 mb-2">
              Postal Code
            </label>
            <input
              type="text"
              {...register("postalCode", {
                required: "Please enter your postal code",
              })}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
              id="postalCode"
            />
            {errors.postalCode && (
              <div className="text-red-500 mt-1">{errors.postalCode.message}</div>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700 mb-2">
            Country
          </label>
          <input
            type="text"
            {...register("country", {
              required: "Please enter your country",
            })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            id="country"
          />
          {errors.country && (
            <div className="text-red-500 mt-1">{errors.country.message}</div>
          )}
        </div>

        <div className="flex justify-center">
          <button onClick={() => router.push("login?redirect=/payment")} type="button" className=" w-full md:w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>


        </div>
      </form>

    </Layout>
  );
}

Shipping.auth = true;
