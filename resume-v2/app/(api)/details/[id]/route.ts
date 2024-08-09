import { UserDetails } from "@/constants";
import { details } from "@/data";

const defaultUser: UserDetails = {
  name: "no name",
  phone: "012-3456789",
  email: "sample.mail@mail.com",
  role: "Web Developer",
  fulllocation: "Kuala Lumpur, MY",
  shortlocation: "KL, MY",
};

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  let user;
  user = details.find((user) => user.userId === params.id);
  if (!user) {
    user = defaultUser;
  }
  return Response.json(user);
}

export async function POST(req: Request) {
  const {details} = await req.json()
  
}
