export type Title = {
  title: string;
  subtitle?: string;
};

const PageTitle = ({ title, subtitle }: Title) => {
  return (
    <div className="max-w-max my-4">
      <div className={'max-w-max'}>
        <h2 className="text-2xl md:text-4xl text-gray-800 relative z-10">
          {title}
        </h2>
        <div
          aria-hidden={true}
          className="h-4 bg-vertdeau relative bottom-4 z-0"
        />
      </div>
      {subtitle ? <p className={'w-3/4'}>{subtitle}</p> : null}
    </div>
  );
};

export { PageTitle };
