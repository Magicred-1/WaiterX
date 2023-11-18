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
          <AccordionTrigger>
            1. How will WaiterX help me handle my crypto ?
          </AccordionTrigger>
          <AccordionContent>
            WaiterX streamlines crypto management in Telegram, you can create or
            import wallets and manage your assets without switching apps
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>
            2. Can WaiterX transfer crypto between networks?
          </AccordionTrigger>
          <AccordionContent>
            Yes waiterX can do it With hyperlane directly from your telegram
            app.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>
            3. Will waiterX get me the best rates?
          </AccordionTrigger>
          <AccordionContent>
            Waiter X gets you the best swap rates by automatically comparing
            prices across all platforms with cow protocol all directly in your
            telegram
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default QuestionAndAnswer;
