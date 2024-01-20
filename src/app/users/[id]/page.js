import { UserDataItem } from "@/components/UserDataItem";
import { getData } from "@/api";
import { MAIN_API } from "@/consts";

export default async function UserInfo({ params }) {
  const userInfo = await getData(`${MAIN_API}/${params.id}`);
  const { name, email, address: { city, street, suite } } = userInfo;

  return (
    <ul>
      <UserDataItem title={'Name'} value={name} />
      <UserDataItem title={'Email'} value={email} />
      <UserDataItem title={'Address'} value={`${city}, ${street}, ${suite}`} />
    </ul>
  )
}
