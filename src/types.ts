export type ViewStage = 'hero' | 'form' | 'thankyou';

export interface ContactFormData {
  name: string;
  email: string;
  address: string;
  phone: string;
  comments: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
}

export interface SubmittedMessage extends ContactFormData {
  submittedAt: string;
  referenceId: string;
}
