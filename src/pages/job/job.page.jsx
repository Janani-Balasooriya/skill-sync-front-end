import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@radix-ui/react-select";
import { Briefcase, MapPin } from "lucide-react";

function JobPage(){

    const job = {
        title: "Intern - Software Engineer",
        description:
        "We are seeking a motivated and enthusiastic software engineering Intern to join our team. As a software engineering",
        type: "Full-time",
        location: "Remote",
        questions: [
            "Share your academic background and highlight key programming concepts you've mastered. How has your education shaped your",
            "Describe your professional development, emphasizing any certificatios obtained. How have these certifications enriched you?",
            "Discuss notable projects in your programming experience. What challenges did you face, and how did you apply your skills to them?"
        ],
    };

    return (
        <div>
            <div>
                <h2>{job.title}</h2>
                <div className="flex items-center gap-x-4 mt-4">
                    <div className=" flex items-center gap-x-2">
                        <Briefcase />
                        <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <MapPin />
                        <span>{job.location}</span>
                    </div>
                </div>
            </div>
            <div>
                <p>{job.description}</p>
            </div>

            <Separator />

            <form className="py-8 flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-4">
                    <Label>Full Name</Label>
                    <Input />
                </div>
                <div>
                    <div className="flex flex-col gap-y-4">
                        <Label>
                            Talk about the experience you have gained in Architecting Software?
                        </Label>
                        <Textarea/>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-y-4">
                        <Label>
                            What are the technologies you're familiar with?
                        </Label>
                        <Textarea/>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col gap-y-4">
                        <Label>
                            Talk about the experience you got in software development
                        </Label>
                        <Textarea/>
                    </div>
                </div>

                <Button type="submit" className="mt-8 bg-card text-card-foreground w-fit">
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default JobPage;