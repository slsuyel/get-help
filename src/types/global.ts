/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export interface ScrollToTopProps {
  children?: ReactNode;
}

export interface TypeDataForm {
  id?: number;
  name?: string;

  adult_family_members?: string;
  applicant_name?: string;
  applicant_signature?: string;
  application_preparer_name?: string;
  arrival_legality?: string;
  arriving_date?: string;
  category?: string;
  country_of_birth?: string;
  country_of_conflict?: string;
  current_address?: string;
  current_institution?: string;
  current_living?: string;
  dob?: any;
  education_level?: string;
  father_name?: string;
  gender?: string;
  head_name?: string;
  head_phone?: string;
  highest_education?: string;
  institution_address?: string;
  marital_status?: string;
  minor_family_members?: string;
  mother_name?: string;
  national_id_or_ssn?: string;
  nationality?: string;
  perjury_declaration?: string;
  permanent_address?: string;
  phone?: string;
  preparer_address?: string;
  preparer_email?: string;
  preparer_phone?: string;
  race?: string;
  recent_exam_grade?: string;
  reference1_address?: string;
  reference1_email?: string;
  reference1_name?: string;
  reference1_phone?: string;
  reference1_relationship?: string;
  reference2_address?: string;
  reference2_email?: string;
  reference2_name?: string;
  reference2_phone?: string;
  reference2_relationship?: string;
  religion?: string;
  sheltering_country?: string;
  situation?: string;
  terms_agreement?: string;
  total_family_members?: string;
  email: string;
  status: string;
  role_id?: number | null;
}

export interface TAdmin {
  id: number;
  name: string;
  email: string;
  location?: string | null;
  role?: string | null;
}

export interface TDuration {
  how_long: string;
}

export interface TUserDecision {
  id: number;
  user_id: number;
  title: string | null;
  why: string | null;
  how_long: {
    start_date: string | null;
    end_date: string | null;
    days: number;
    months: number;
    years: number;
  };
  how_much: string | null;
  approved_amount: string | null;
  feedback: string | null;
  date: string | null;
  note: string | null;
  status: string | null;
  currency: string | null;
  start_date: string | null;
  end_date: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface TUser {
  id: number;
  creator_id: string | null;
  name: string | null;
  email: string | null;
  adult_family_members: string | null;
  applicant_name: string | null;
  applicant_signature: string | null;
  application_preparer_name: string | null;
  arrival_legality: string | null;
  arriving_date: string | null;
  category: string | null;
  country_of_birth: string | null;
  country_of_conflict: string | null;
  current_address: string | null;
  current_institution: string | null;
  current_living: string | null;
  dob: string | null;
  education_level: string | null;
  father_name: string | null;
  gender: string | null;
  head_name: string | null;
  head_phone: string | null;
  highest_education: string | null;
  institution_address: string | null;
  marital_status: string | null;
  minor_family_members: string | null;
  mother_name: string | null;
  national_id_or_ssn: string | null;
  nationality: string | null;
  perjury_declaration: string | null;
  permanent_address: string | null;
  phone: string | null;
  preparer_address: string | null;
  preparer_email: string | null;
  preparer_phone: string | null;
  race: string | null;
  recent_exam_grade: string | null;
  reference1_address: string | null;
  reference1_email: string | null;
  reference1_name: string | null;
  reference1_phone: string | null;
  reference1_relationship: string | null;
  reference2_address: string | null;
  reference2_email: string | null;
  reference2_name: string | null;
  reference2_phone: string | null;
  reference2_relationship: string | null;
  religion: string | null;
  sheltering_country: string | null;
  situation: string | null;
  terms_agreement: string | null;
  total_family_members: string | null;
  role: string | null;
  role_id: string | null;
  email_verified_at: string | null;
  status: string | null;
  created_at: string | null;
  updated_at: string | null;
  otp_expires_at: string | null;
  email_verification_token: string | null;
  decisions: TUserDecision[];
  creator: string | null;
}

export interface TCreator {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  location: string;
  role: string;
}

export interface TAgent {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  location: string | null;
  role: string | null;
}

export interface TDonationRequest {
  id: any;
  user_id: any;
  feedback: any;
  duration: any;
  approved_amount: any;
  status: 'pending' | 'approved' | 'rejected';
  how_long: [string, string];
  how_much: number;
  note: string;
  currency: string;
  title: string;
  why: string;
}

export interface TSingleDecision {
  id: number;
  user_id: number;
  title: string;
  why: string;
  how_long: HowLong;
  how_much: string;
  approved_amount: string;
  feedback: null;
  date: Date;
  note: string;
  status: string;
  currency: string;
  start_date: null;
  end_date: null;
  created_at: Date;
  updated_at: Date;
  user: TUser;
}

export interface HowLong {
  start_date: null;
  end_date: null;
  days: number;
  months: number;
  years: number;
}
