import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Briefcase, MapPin } from "lucide-react";

function JobCard(){
    return (
        <Link to={'/job/123'} className="block">
                    <Card>
                        <CardHeader>
                            <CardTitle> Cloud Solutions Engineer</CardTitle>
                        </CardHeader>
                        <CardContent></CardContent>
                        <CardFooter className="gap-x-4">
                            <div className="flex items-center gap-x-2">
                                <Briefcase/>
                                <span>Full-time</span>
                            </div>
                            <div className="flex items-center gap-x-2">
                                <MapPin/>
                                <span>Colombo</span>
                            </div>
                        </CardFooter>
                    </Card>
                </Link>
    );
}

export default JobCard;