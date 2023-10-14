import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image"
import Link from "next/link";
import config from "../../../../sanity/config/client-config";
import imageUrlBuilder from '@sanity/image-url';
import Refractor from "react-refractor";

type Props = {
  params: { project: string }
}

const builder = imageUrlBuilder({
  baseUrl: 'https://cdn.sanity.io/',
  projectId: config.projectId,
  dataset: config.dataset,
});

const urlFor = (source) => builder.image(source)

const SampleImageComponent = ({ value }) => {
  return (
    <Image
      src={urlFor(value).auto('format').fit('max').width(720).toString()}
      alt={value.alt || ' '}
      loading="lazy"
    />
  )
}

const components = {
  types: {
    code: (props) => (
      <Refractor className="bg-white text-black p-5 rounded-md" language={props.value.language} value={props.value.code} />
    ),

    image: SampleImageComponent
  },
};


export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  console.log(project._id)
  return <div>
    <Link href={'./'} className="text-white font-bold text-xl mb-10" >Back</Link>
    <header className="flex items-center justify-between">
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold mb-4 pb-6">{project.name}</h1>
      <a href={project.url} title="View Project" target="_blank" rel="noopener noreferrer" className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition">
        View Project
      </a>
    </header>

    <div className="text-lg text-white mt-5">
      <PortableText value={project.content} components={components} />
    </div>

    <Image src={project.image} alt={project.name} width={1920} height={1080} className="mt-10 border-2 border-gray-700 object-cover rounded-xl" />
  </div>
} 