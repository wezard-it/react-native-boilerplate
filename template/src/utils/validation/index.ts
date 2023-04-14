/* eslint-disable @typescript-eslint/no-explicit-any */
import * as Yup from 'yup'

// TODO: this file's content needs a detailed check

const getFieldInit = (type: FieldType): AnySchema => {
  return Yup[type]()
}

const getYupType = (
  yupChain: AnySchema,
  type: RuleType,
  error: string,
  value: string,
  _key: string,
): AnySchema => {
  if (type === 'phone') {
    return (yupChain as Yup.StringSchema).matches(/(\+\d{1,2}\s)?\(?\d{9,12}/, {
      excludeEmptyString: true,
      message: error,
    })
  }

  if (type === 'equals') {
    return (yupChain as Yup.StringSchema).oneOf([value], error)
  }

  if (type === 'same') {
    const findValue = Yup.ref(value) ? [Yup.ref(value)] : [value]
    return (yupChain as Yup.StringSchema).oneOf(findValue, error)
  }

  if (type === 'match') {
    const [regex, flags] = value.split('/').slice(1)
    return (yupChain as Yup.StringSchema).matches(new RegExp(regex, flags), {
      excludeEmptyString: true,
      message: error,
    })
  }

  if (value !== undefined) {
    return yupChain[type](value, error)
  }

  return yupChain[type](error)
}

const createValidationSchema = (config: ValidationSchemaProps): Yup.ObjectSchema<any, any> => {
  const configMap = Object.entries(config).reduce((acc, [key, props]) => {
    const innerSchema = Object.entries(
      props.rules as { error: string; value: string; key: string }[],
    ).reduce((innerAcc, [innerKey, innerProps]) => {
      if (innerKey !== 'type') {
        return getYupType(
          innerAcc,
          innerKey as RuleType,
          innerProps.error,
          innerProps.value,
          innerProps.key,
        )
      }

      return innerAcc
    }, getFieldInit(props.type))

    return { ...acc, [key]: innerSchema }
  }, {})

  return Yup.object().shape(configMap)
}

export default createValidationSchema
