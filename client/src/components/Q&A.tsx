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
          <AccordionTrigger>1. How does Waiter X facilitate managing my cryptocurrencies via Telegram?</AccordionTrigger>
          <AccordionContent>
            Waiter X is designed to simplify managing your cryptocurrencies directly through Telegram.
            You can either create a new wallet or import an existing one using a few simple steps on your phone.
            This integration allows you to handle your digital assets without leaving Telegram or toggling between different platforms and blockchains.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>2. Can I perform interchain cryptocurrency transfers with Waiter X?</AccordionTrigger>
          <AccordionContent>
            Yes, Waiter X supports interchain transfers through the integration of Hyperlane.
            This allows you to seamlessly and securely transfer cryptocurrencies across different blockchains.
            This feature makes interchain exchanges accessible and convenient, right from your Telegram application.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>3. How does Waiter X ensure the best pricing for cryptocurrency swaps?</AccordionTrigger>
          <AccordionContent>
            Waiter X utilizes the Cow Protocol to ensure you get the best prices when swapping cryptocurrencies.
            The protocol searches and compares prices across various exchange platforms to offer you the most advantageous rate.
            This integration allows for efficient and cost-effective swaps without having to leave the Telegram interface.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default QuestionAndAnswer;
