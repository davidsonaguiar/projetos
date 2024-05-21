import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  banner: string;
  description: string;
  link: string;
}

export default function RepositoryCard({ name, banner, description, link }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="line-clamp-2">
          {name}
        </CardTitle>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[150px]">
          <Image
            src={banner}
            alt={name}
            width={300}
            height={150}
            className="h-full w-full object-cover rounded-md"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={link}>
            Ver mais
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}