import React from 'react'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Image from 'next/image'

function Contact() {
    return (
        <div className="py-24 relative" id="contact">
            <div className="text-center">
                <h1 className="text-main text-4xl font-bold">Contact</h1>
                <p>Contact us</p>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center gap-28 my-16">
                <Image src="/assets/contact.png" width={500} height={500} alt="..."></Image>

                <Card className="w-[350px] ">
                    <CardHeader>
                        <CardTitle>Contact Us</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="your name" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">phone number</Label>
                                    <Input id="name" placeholder="your phone number" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Email</Label>
                                    <Input id="name" placeholder="your email" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Message</Label>
                                    <Textarea placeholder="Type your message here." />
                                </div>
                                
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Deploy</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Contact
