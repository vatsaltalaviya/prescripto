import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userprofile, setuserprofile] = useState({
    name: "Vatsal Talaviya",
    image: assets.profile_pic,
    email: "vatsal@gmail.com",
    phone: "9999999999",
    address: {
      line1: "123 Main St",
      line2: "Anytown, USA",
    },
    gender: "male",
    dob: "1990-05-25",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userprofile.image} alt="" />
      {isEdit ? (
        <input
          className="bg-gray-50 font-medium text-2xl max-w-60 mt-4"
          type="text"
          onChange={(e) =>
            setuserprofile((perv) => ({ ...perv, name: e.target.value }))
          }
          value={userprofile.name}
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4">
          {userprofile.name}
        </p>
      )}

      <hr className="h-[1px] bg-zinc-400 border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMANTION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userprofile.email}</p>
          <p className="font-medium">Phone no:</p>
          {isEdit ? (
            <input
              type="text"
              className="bg-gray-100 max-w-52"
              onChange={(e) =>
                setuserprofile((perv) => ({ ...perv, phone: e.target.value }))
              }
              value={userprofile.phone}
            />
          ) : (
            <p className="text-blue-400">{userprofile.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-100 max-w-52"
                type="text"
                onChange={(e) =>
                  setuserprofile((perv) => ({
                    ...perv,
                    address: { ...perv.address, line1: e.target.value },
                  }))
                }
                value={userprofile.address.line1}
              />
              <br />
              <input
                className="bg-gray-100 max-w-52"
                type="text"
                onChange={(e) =>
                  setuserprofile((perv) => ({
                    ...perv,
                    address: { ...perv.address, line2: e.target.value },
                  }))
                }
                value={userprofile.address.line2}
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userprofile.address.line1}
              <br />
              {userprofile.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="bg-gray-100 max-w-28 "
              onChange={(e) =>
                setuserprofile((perv) => ({
                  ...perv,
                  gender: e.target.value,
                }))
              }
              value={userprofile.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <p className="text-gray-400">{userprofile.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52"
              type="date"
              onChange={(e) =>
                setuserprofile((perv) => ({
                  ...perv,
                  dob: e.target.value,
                }))
              }
              value={userprofile.dob}
            />
          ) : (
            <p className="text-gray-500">
              {new Date(userprofile.dob).toLocaleDateString()}
            </p>
          )}
        </div>
        <div className="mt-10">
          {isEdit ? (
            <button className="border border-primary rounded-full px-8 py-2 hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(false)}>Save Information</button>
          ) : (
            <button className="border border-primary rounded-full px-8 py-2 hover:bg-primary hover:text-white transition-all" onClick={() => setIsEdit(true)}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
