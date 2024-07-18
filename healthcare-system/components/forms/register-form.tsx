"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField from "../custom-form-field";
import SubmitButton from "../submit-button";
import { useState } from "react";
import { PatientFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions";
import { FormFieldTypes } from "./patient-form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Doctors, GenderOptions, IdentificationTypes } from "@/constants";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";
import Image from "next/image";
import FileUploader from "../file-uploader";

const RegisterForm = ({ user }: { user: User }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof PatientFormValidation>>({
    resolver: zodResolver(PatientFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof PatientFormValidation>) {
    setIsLoading(true);
    try {
      const userData = { name, email, phone };
      const user = await createUser(userData);
      if (user) router.push(`/patients/${user.$id}/register`);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12 flex-1"
      >
        <section className="space-y-4">
          <h1 className=" header">Welcome, {user.name} 👋</h1>
          <p className=" text-dark-700">Let us know more about you.</p>
        </section>
        <section className="space-y-6">
          <div className=" mb-9 space-y-1">
            <h2 className=" sub-header">Personal Information</h2>
          </div>
        </section>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.INPUT}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <div className=" flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="email"
            label="Email"
            placeholder="john.doe@mail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.PHONE_INPUT}
            name="phone"
            label="Phone"
            placeholder="012-3456789"
          />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.DATE_PICKER}
            name="birthDate"
            label="Date of Birth"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.SKELETON}
            name="gender"
            label="Gender"
            renderSkeleton={(field) => (
              <FormControl>
                <RadioGroup
                  className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((gender) => (
                    <div key={gender} className="radio-group">
                      <RadioGroupItem value={gender} id={gender} />
                      <Label htmlFor="gender" className=" cursor-pointer">
                        {gender}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="address"
            label="Address"
            placeholder="No 15, Jln Temenggong"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="occupation"
            label="Occupation"
            placeholder="Teacher"
          />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="emergencyContactName"
            label="Emergency contact name"
            placeholder="Doe Dory"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.PHONE_INPUT}
            name="emergencyContactNumber"
            label="Emergency contact number"
            placeholder="012-3456789"
          />
        </div>

        <section className="space-y-6">
          <div className=" mb-9 space-y-1">
            <h2 className=" sub-header">Medical Information</h2>
          </div>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.SELECT}
          name="primaryPhysician"
          label="Primary Physician"
          placeholder="Select a physician"
        >
          {Doctors.map((doctor) => {
            return (
              <SelectItem key={doctor.name} value={doctor.name}>
                <div className="flex cursor-pointer items-center gap-2">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    height={32}
                    width={32}
                    className="rounded-full border border-dark-500"
                  />
                  <p>{doctor.name}</p>
                </div>
              </SelectItem>
            );
          })}
        </CustomFormField>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="insuranceProvider"
            label="Insurance provider"
            placeholder="PRUBSN"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.INPUT}
            name="insurancePolicyNumber"
            label="Insurance policy number"
            placeholder="ABC123456"
          />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.TEXTAREA}
            name="allergies"
            label="Allergies"
            placeholder="Peanuts, Shellfish, Pollen"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.TEXTAREA}
            name="currentMedication"
            label="Current medication"
            placeholder="Fluticasone, Cetirizine"
          />
        </div>
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.TEXTAREA}
            name="familyMedicalHistory"
            label="Family medical history"
            placeholder="Father had diabetes, Granny had hypertension"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldTypes.TEXTAREA}
            name="pastMedicalHistory"
            label="Past medical history"
            placeholder="Appendectomy, Vasectomy"
          />
        </div>

        <section className="space-y-6">
          <div className=" mb-9 space-y-1">
            <h2 className=" sub-header">Identification and Verification</h2>
          </div>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.SELECT}
          name="identificationType"
          label="Identification type"
          placeholder="Select an id type"
        >
          {IdentificationTypes.map((idType) => {
            return (
              <SelectItem key={idType} value={idType}>
                {idType}
              </SelectItem>
            );
          })}
        </CustomFormField>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.INPUT}
          name="identificationNumber"
          label="Identification number"
          placeholder="ABC12345678"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldTypes.SKELETON}
          name="identificationDocument"
          label="Scanned copy of identification document"
          renderSkeleton={(field) => (
            <FormControl>
              <FileUploader files={field.value} onChange={field.onChange} />
            </FormControl>
          )}
        />

        <section className="space-y-6">
          <div className=" mb-9 space-y-1">
            <h2 className=" sub-header">Consent and Privacy</h2>
          </div>
        </section>
        <CustomFormField
          fieldType={FormFieldTypes.CHECKBOX}
          control={form.control}
          name="treatmentConsent"
          label="I CONSENT to treatment"
        />
        <CustomFormField
          fieldType={FormFieldTypes.CHECKBOX}
          control={form.control}
          name="dosclosureConsent"
          label="I CONSENT to disclosure of information"
        />
        <CustomFormField
          fieldType={FormFieldTypes.CHECKBOX}
          control={form.control}
          name="privacyConsent"
          label="I CONSENT to privacy policy"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RegisterForm;
