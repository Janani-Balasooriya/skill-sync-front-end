import JobCard from "@/components/shared/JobCard";

function JobSection(){
    return (
        <section className="py-8">
            <h2>Available Jobs</h2>
            <div className="mt-4 flex flex-col gap-y-8">
                <JobCard/>
                <JobCard/>
            </div>
        </section>
    );
}

export default JobSection;