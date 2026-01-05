import { redirect } from 'next/navigation';

export default function PrivacyRedirect() {
  redirect('/trust/privacy');
}
