import React, { useState } from "react";

export default function useRegister() {
  const [businessName, setBusinessName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [website, setWebsite] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [location, setLocation] = useState("");
  const [selectedBusinessType, setSelectedBusinessType] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  return {
    businessName,
    setBusinessName,
    selectedRole,
    setSelectedRole,
    website,
    setWebsite,
    regNumber,
    setRegNumber,
    location,
    setLocation,
    selectedBusinessType,
    setSelectedBusinessType,
    selectedIndustry,
    setSelectedIndustry,
    phoneNumber,
    setPhoneNumber,
    bio,
    setBio,
    expiry,
    setExpiry,
    cvv,
    setCvv,
    cardHolder,
    setCardHolder,
    cardNumber,
    setCardNumber,
  };
}
