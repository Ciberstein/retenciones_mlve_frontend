import { Link } from 'react-router-dom';

export const Input = ({
  label = null,
  type = 'text',
  variant = 'normal',
  className = '',
  size = 'md',
  icon = null,
  element = null,
  full = false,
  helperLink = { url: null, text: null },
  register = {
    function: null,
    errors: { function: null, rules: {} },
  },
  ...props
}) => {
  const variants = {
    sm: 'text-sm p-2',
    md: 'text-md p-3',
    lg: 'text-lg p-4',
    xl: 'text-xl p-5',
  };

  return (
    <div className={`flex flex-col gap-2 ${full && 'w-full'}`}>
      { label || helperLink.url || helperLink.text ?
        <div className="flex gap-2 justify-between">
          { label &&
            <label
              htmlFor={props.id || null}
              className="text-sm"
            >
              {label || null}
            </label>        
          }
          {
            helperLink.url || helperLink.text ?
            <Link
              to={helperLink.url || null}
              className="text-sm text-blue-400 hover:underline"
            >
              {helperLink.text || null}
            </Link>      
            : null    
          }
        </div> : null 
      }
      <div
        className={`flex gap-2 items-center border rounded-lg ${props.disabled ? 'bg-black/10' : ''} ${
          register.errors.function &&
          register.errors.function[props.name]
            ? 'border-red-400'
            : 'border-gray-300'
        } ${variants[size]} ${className}`}
      >
        <label
          htmlFor={props.id || null}
          className="flex flex-grow gap-2 items-center"
        >
          {icon && icon}
          <input
            id={props.id || null}
            name={props.name || null}
            type={type}
            className={`bg-transparent w-full placeholder:text-gray-500 focus-visible:outline-none disabled:text-gray-500`}
            { ...register.function &&
              {...register.function(
                props.name,
                register.errors.rules,
              )}
            }
            {...props}
          />
        </label>
        {element && element}
      </div>
      { register.errors.function &&
        register.errors.function[props.name] && 
          register.errors.function[props.name].message && (
          <label
            htmlFor={props.id || null}
            className="text-xs text-red-400"
          >
            {
              register.errors.function[props.name]
                .message
            }
          </label>
      )}
    </div>
  );
};
