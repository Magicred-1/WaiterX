import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const QuestionAndAnswer = () => {
  return (
    <section className='bg-[#262a2e] flex flex-col px-4 sm:px-6 md:px-12 lg:px-16'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl md:text-7xl text-center lg:w-[1024px] my-8'>
          Anything you need to know
        </h1>
        <p className='lg:w-[768px] text-center md:text-xl text-lg lg:mx-0 sm:mx-8 mx-4'>
          Feel free to dm us for any question
        </p>
      </div>

      <Accordion type='single' collapsible className='my-12'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>1. Question</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            itaque ipsa praesentium quasi, in laborum voluptatum veritatis nihil
            cumque quibusdam ullam dolor eius provident numquam incidunt
            reiciendis ab hic aperiam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>2. Question</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            itaque ipsa praesentium quasi, in laborum voluptatum veritatis nihil
            cumque quibusdam ullam dolor eius provident numquam incidunt
            reiciendis ab hic aperiam.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>3. Question</AccordionTrigger>
          <AccordionContent>
            Low-cap cryptocurrencies are digital assets with smaller market
            capitalizations. They possess the potential for higher returns due
            to their volatility, making them an enticing choice for traders
            seeking to leverage price movements.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default QuestionAndAnswer;
