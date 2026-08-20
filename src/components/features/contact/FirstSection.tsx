import { Button } from "@/components/ui/button";

export function FirstContactSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

       
          <div className="pt-4">
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
              Let's talk.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 md:text-lg dark:text-gray-400">
              Have a project or need help? Fill out the form, and I'll get
              back to you soon.
            </p>
          </div>


      
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur-sm md:p-8 dark:border-white/10 dark:bg-white/5">
            <form className="space-y-6">

            
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>


             
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>


        
              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-gray-300"
                >
                  Your Project
                </label>

                <textarea
                  id="project"
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 dark:border-white/10 dark:bg-black/20 dark:text-white dark:placeholder:text-gray-500"
                />
              </div>


              {/* Submit */}
              <Button
                type="submit"
                variant="secondary"
                className="w-full"
              >
                Submit
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
