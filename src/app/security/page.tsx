import { redirect } from 'next/navigation';

export default function SecurityRedirect() {
  redirect('/trust/security');
}
