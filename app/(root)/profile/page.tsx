// import Collection from '@/components/shared/Collection'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { getEventsByUser } from '@/lib/actions/event.actions'
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";
// import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProfilePage = () => {
  // const { sessionClaims } = auth();
  // const userId = sessionClaims?.userId as string;

  // const orders = await getOrdersByUser({ userId, page: 1 });

  // const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];
  // const organizedEvents = await getEventsByUser({ userId, page: eventsPage })

  return (
    <>
      {/* <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">My Orders</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">Buy More Services</Link>
          </Button>
        </div>
      </section> */}
      {/* <section className="wrapper my-8">
    
        
        
      </section> */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">
            Services Organized
          </h3>
          <Button asChild className="button hidden sm:flex">
            <Link href="/#events">Explore More Services</Link>
          </Button>
        </div>
      </section>
      <section
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
      <div className="gap-2 grid lg:grid-cols-4 sm:grid-cols-2">
        <Card className="py-4">
          <CardHeader>
            <CardTitle>Housewarming</CardTitle>
            <CardDescription>{/* <p>{item.description}</p> */}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/assets/images/HomeWarming.png"
              width={500}
              height={500}
              alt="Housewarming"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Consulting fee: 13$</p>
            <Button>CheckOut</Button>
          </CardFooter>
        </Card>
        <Card className="py-4 card">
          <CardHeader>
            <CardTitle>Traditional Events</CardTitle>
            <CardDescription>{/* <p>{item.description}</p> */}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/assets/images/TraditionalEvents.png"
              width={500}
              height={500}
              alt="Traditional Events"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Consulting fee: 13$</p>
            <Button>CheckOut</Button>
          </CardFooter>
        </Card>
        <Card className="py-4 card">
          <CardHeader>
            <CardTitle>Baby Shower</CardTitle>
            <CardDescription>{/* <p>{item.description}</p> */}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/assets/images/BabyShower.png"
              width={500}
              height={500}
              alt="Baby Shower & Gender Reveal"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Consulting fee: 13$</p>
            <Button>CheckOut</Button>
          </CardFooter>
        </Card>
        <Card className="py-4 card">
          <CardHeader>
            <CardTitle>Birthdays</CardTitle>
            <CardDescription>{/* <p>{item.description}</p> */}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/assets/images/Birthday.png"
              width={500}
              height={500}
              alt="Birthdays"
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <p>Consulting fee: 13$</p>
            <Button>CheckOut</Button>
          </CardFooter>
        </Card>
      </div>
      {/* <section>
      <Collection>
        
      </Collection>
    </section> */}
    </section>
    </>
  );
};

export default ProfilePage;
