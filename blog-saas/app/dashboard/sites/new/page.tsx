import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const NewSiteRoute = () => {
  return (
    <div className=" flex flex-col flex-1 items-center justify-center">
      <Card className=" max-w-[450px]">
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your site here. Click 'save' once you are done
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className=" flex flex-col gap-y-6">
            <div className=" grid gap-2">
              <label>Site Name</label>
              <Input placeholder="Site name" />
            </div>
            <div className=" grid gap-2">
              <label>Subdirectory</label>
              <Input placeholder="Subdirectory" />
            </div>
            <div className=" grid gap-2">
              <label>Description</label>
              <Textarea placeholder="Small description of your site" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className=" ml-auto">Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default NewSiteRoute;
