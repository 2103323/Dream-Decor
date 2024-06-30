"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem,FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventFormSchema } from "@/lib/validator"
import * as z from 'zod'
import { eventDefaultValues } from "@/constants"
import Dropdown from "./Dropdown"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { IEvent } from "@/lib/database/models/event.model"
import { createEvent } from "@/lib/actions/event.action";


  type EventFormProps = {
    userId: string
    type: "Send"
  }
  const ContactForm = ({ userId, type }: EventFormProps) => {

  const initialValues = eventDefaultValues;
  // const router = useRouter()
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  })

  async function onSubmit(values: z.infer<typeof eventFormSchema>) {
    if(type === 'Send') {
      try {
        const newEvent = await createEvent({
          userId,
          event: { ...values},
        })

        if(newEvent) {
          form.reset();
          
        }
      } catch (error) {
        console.log(error);
      }
    }
    
   
  }
  return (
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5" >
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Your Name"
                      {...field}
                      className="input-field"
                      autoComplete="given-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Your Email"
                      {...field}
                      className="input-field"
                      autoComplete="given-Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown onChangeHandler={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          </div> */}
          <div className="flex flex-col gap-5 md:flex-row">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="h-72">
                    <Textarea
                      placeholder="Description"
                      {...field}
                      className="textarea rounded-2xl"
                      autoComplete="given-description"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button 
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? (
            'Submitting...'
          ): `${type}`}</Button>
        </form>
      </Form>
  )};


export default ContactForm