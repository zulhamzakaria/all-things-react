import { UserDetails } from "@/constants";
import { details } from "@/data";

const apiURL = `${process.env.API_URL}/details`;

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
  try {
    // sample: https://localhost:7287/api/details/user_2gb3uVBwoAB9WzzUB5Ix3FIBc8e
    const response = await fetch(`${apiURL}/${params.id}`);

    if (!response) {
      throw new Error("Error fetching user data");
    }

    const user = await response.json();

    const {
      fullLocation: fulllocation,
      shortLocation: shortlocation,
      ...otherprops
    } = user;

    return Response.json({ ...otherprops, fulllocation, shortlocation });
  } catch (err) {
    console.error((err as Error).message);
    return Response.json(defaultUser);
  }
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { details } = await req.json();

  const response = await fetch(apiURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userid: params.id, ...details }),
  });

  // console.log(JSON.stringify({ userid: params.id, ...details }));

  return Response.json("");
}
