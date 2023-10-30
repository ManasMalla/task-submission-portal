import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
} from 'react';

export default function FileTask(props: {
  taskName: string | undefined | null;
}) {
  return (
    <div className="m-4 px-8 py-3 bg-amber-100 text-center rounded-md dark:bg-slate-800">
      Upload the{' '}
      {props.taskName === undefined ? 'Application Code' : props.taskName}
    </div>
  );
}
