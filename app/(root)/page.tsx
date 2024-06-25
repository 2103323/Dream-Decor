"use client";
// import CategoryFilter from '@/components/shared/CategoryFilter';
// import Collection from '@/components/shared/Collection'
// import Search from '@/components/shared/Search';
import { Button } from "@/components/ui/button";
// import { getAllEvents } from '@/lib/actions/event.actions';
// import { SearchParamProps } from '@/types';
import React from "react";
// import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
// import "./app.module.css";
import Image from "next/image";
import { MarqueeDemo } from "@/components/shared/MarqueeDemo";
// import * as React from "react"
import { InstapaperShareButton, InstagramIcon } from "next-share";
// import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import CheckoutButton from "@/components/shared/CheckoutButton";

// import { Description } from "@radix-ui/react-dialog";

export default async function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Best Decoration for you !!</h1>
            <p className="p-regular-20 md:p-regular-24">
              Housewarming, Traditional Events, Birthdays, Baby Shower, Gender
              Reveal !!
            </p>
            <SignedIn>
              <Button
                size="lg"
                asChild
                className="button w-full sm:w-fit"
                style={{ backgroundColor: "darkgoldenrod", color: "white" }}
              >
                <Link href="#events">Book Now</Link>
              </Button>
            </SignedIn>
          </div>

          <Image
            src="/assets/images/hero.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>
      <SignedOut>
        <section>
          <MarqueeDemo />
        </section>
      </SignedOut>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <SignedIn>
          <h2 className="h2-bold">Services Catalogue</h2>
          <div className="gap-2 grid lg:grid-cols-4 sm:grid-cols-2">
            <Card className="py-4">
              <CardHeader>
                <CardTitle>Housewarming</CardTitle>
                <CardDescription>
                  {/* <p>{item.description}</p> */}
                </CardDescription>
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
                <CheckoutButton />
              </CardFooter>
            </Card>
            <Card className="py-4 card">
              <CardHeader>
                <CardTitle>Traditional Events</CardTitle>
                <CardDescription>
                  {/* <p>{item.description}</p> */}
                </CardDescription>
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
                <CheckoutButton />
              </CardFooter>
            </Card>
            <Card className="py-4 card">
              <CardHeader>
                <CardTitle>Baby Shower</CardTitle>
                <CardDescription>
                  {/* <p>{item.description}</p> */}
                </CardDescription>
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
                <CheckoutButton />
              </CardFooter>
            </Card>
            <Card className="py-4 card">
              <CardHeader>
                <CardTitle>Birthdays</CardTitle>
                <CardDescription>
                  {/* <p>{item.description}</p> */}
                </CardDescription>
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
                <CheckoutButton />
              </CardFooter>
            </Card>
          </div>
        </SignedIn>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>
            Connect with us
          </h2>
          <div style={{ display: "inline-block" }}>
            <a href={"https://www.instagram.com/dream_decor_usa/"}>
              <InstagramIcon size={32} round />
            </a>
          </div>
        </div>

        {/* <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        /> */}
      </section>
    </>
  );
}
