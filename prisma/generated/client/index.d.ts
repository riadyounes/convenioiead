
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Covenant
 * 
 */
export type Covenant = $Result.DefaultSelection<Prisma.$CovenantPayload>
/**
 * Model Cupon
 * 
 */
export type Cupon = $Result.DefaultSelection<Prisma.$CuponPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Covenants
 * const covenants = await prisma.covenant.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Covenants
   * const covenants = await prisma.covenant.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.covenant`: Exposes CRUD operations for the **Covenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Covenants
    * const covenants = await prisma.covenant.findMany()
    * ```
    */
  get covenant(): Prisma.CovenantDelegate<ExtArgs>;

  /**
   * `prisma.cupon`: Exposes CRUD operations for the **Cupon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cupons
    * const cupons = await prisma.cupon.findMany()
    * ```
    */
  get cupon(): Prisma.CuponDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Covenant: 'Covenant',
    Cupon: 'Cupon',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "covenant" | "cupon" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Covenant: {
        payload: Prisma.$CovenantPayload<ExtArgs>
        fields: Prisma.CovenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CovenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CovenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload>
          }
          findFirst: {
            args: Prisma.CovenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CovenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload>
          }
          findMany: {
            args: Prisma.CovenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload>[]
          }
          create: {
            args: Prisma.CovenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload>
          }
          createMany: {
            args: Prisma.CovenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CovenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload>[]
          }
          delete: {
            args: Prisma.CovenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload>
          }
          update: {
            args: Prisma.CovenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload>
          }
          deleteMany: {
            args: Prisma.CovenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CovenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CovenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovenantPayload>
          }
          aggregate: {
            args: Prisma.CovenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCovenant>
          }
          groupBy: {
            args: Prisma.CovenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<CovenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.CovenantCountArgs<ExtArgs>
            result: $Utils.Optional<CovenantCountAggregateOutputType> | number
          }
        }
      }
      Cupon: {
        payload: Prisma.$CuponPayload<ExtArgs>
        fields: Prisma.CuponFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CuponFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CuponFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload>
          }
          findFirst: {
            args: Prisma.CuponFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CuponFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload>
          }
          findMany: {
            args: Prisma.CuponFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload>[]
          }
          create: {
            args: Prisma.CuponCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload>
          }
          createMany: {
            args: Prisma.CuponCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CuponCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload>[]
          }
          delete: {
            args: Prisma.CuponDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload>
          }
          update: {
            args: Prisma.CuponUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload>
          }
          deleteMany: {
            args: Prisma.CuponDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CuponUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CuponUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CuponPayload>
          }
          aggregate: {
            args: Prisma.CuponAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCupon>
          }
          groupBy: {
            args: Prisma.CuponGroupByArgs<ExtArgs>
            result: $Utils.Optional<CuponGroupByOutputType>[]
          }
          count: {
            args: Prisma.CuponCountArgs<ExtArgs>
            result: $Utils.Optional<CuponCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CovenantCountOutputType
   */

  export type CovenantCountOutputType = {
    cupons: number
  }

  export type CovenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cupons?: boolean | CovenantCountOutputTypeCountCuponsArgs
  }

  // Custom InputTypes
  /**
   * CovenantCountOutputType without action
   */
  export type CovenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CovenantCountOutputType
     */
    select?: CovenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CovenantCountOutputType without action
   */
  export type CovenantCountOutputTypeCountCuponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuponWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Covenant
   */

  export type AggregateCovenant = {
    _count: CovenantCountAggregateOutputType | null
    _avg: CovenantAvgAggregateOutputType | null
    _sum: CovenantSumAggregateOutputType | null
    _min: CovenantMinAggregateOutputType | null
    _max: CovenantMaxAggregateOutputType | null
  }

  export type CovenantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CovenantSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type CovenantMinAggregateOutputType = {
    id: number | null
    name: string | null
    cnpj: string | null
    slug: string | null
    userId: number | null
  }

  export type CovenantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    cnpj: string | null
    slug: string | null
    userId: number | null
  }

  export type CovenantCountAggregateOutputType = {
    id: number
    name: number
    cnpj: number
    slug: number
    userId: number
    _all: number
  }


  export type CovenantAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CovenantSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type CovenantMinAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    slug?: true
    userId?: true
  }

  export type CovenantMaxAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    slug?: true
    userId?: true
  }

  export type CovenantCountAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    slug?: true
    userId?: true
    _all?: true
  }

  export type CovenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Covenant to aggregate.
     */
    where?: CovenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covenants to fetch.
     */
    orderBy?: CovenantOrderByWithRelationInput | CovenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CovenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Covenants
    **/
    _count?: true | CovenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CovenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CovenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CovenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CovenantMaxAggregateInputType
  }

  export type GetCovenantAggregateType<T extends CovenantAggregateArgs> = {
        [P in keyof T & keyof AggregateCovenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCovenant[P]>
      : GetScalarType<T[P], AggregateCovenant[P]>
  }




  export type CovenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CovenantWhereInput
    orderBy?: CovenantOrderByWithAggregationInput | CovenantOrderByWithAggregationInput[]
    by: CovenantScalarFieldEnum[] | CovenantScalarFieldEnum
    having?: CovenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CovenantCountAggregateInputType | true
    _avg?: CovenantAvgAggregateInputType
    _sum?: CovenantSumAggregateInputType
    _min?: CovenantMinAggregateInputType
    _max?: CovenantMaxAggregateInputType
  }

  export type CovenantGroupByOutputType = {
    id: number
    name: string
    cnpj: string
    slug: string
    userId: number | null
    _count: CovenantCountAggregateOutputType | null
    _avg: CovenantAvgAggregateOutputType | null
    _sum: CovenantSumAggregateOutputType | null
    _min: CovenantMinAggregateOutputType | null
    _max: CovenantMaxAggregateOutputType | null
  }

  type GetCovenantGroupByPayload<T extends CovenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CovenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CovenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CovenantGroupByOutputType[P]>
            : GetScalarType<T[P], CovenantGroupByOutputType[P]>
        }
      >
    >


  export type CovenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    slug?: boolean
    userId?: boolean
    cupons?: boolean | Covenant$cuponsArgs<ExtArgs>
    User?: boolean | Covenant$UserArgs<ExtArgs>
    _count?: boolean | CovenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["covenant"]>

  export type CovenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    slug?: boolean
    userId?: boolean
    User?: boolean | Covenant$UserArgs<ExtArgs>
  }, ExtArgs["result"]["covenant"]>

  export type CovenantSelectScalar = {
    id?: boolean
    name?: boolean
    cnpj?: boolean
    slug?: boolean
    userId?: boolean
  }

  export type CovenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cupons?: boolean | Covenant$cuponsArgs<ExtArgs>
    User?: boolean | Covenant$UserArgs<ExtArgs>
    _count?: boolean | CovenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CovenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Covenant$UserArgs<ExtArgs>
  }

  export type $CovenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Covenant"
    objects: {
      cupons: Prisma.$CuponPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      cnpj: string
      slug: string
      userId: number | null
    }, ExtArgs["result"]["covenant"]>
    composites: {}
  }

  type CovenantGetPayload<S extends boolean | null | undefined | CovenantDefaultArgs> = $Result.GetResult<Prisma.$CovenantPayload, S>

  type CovenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CovenantFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CovenantCountAggregateInputType | true
    }

  export interface CovenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Covenant'], meta: { name: 'Covenant' } }
    /**
     * Find zero or one Covenant that matches the filter.
     * @param {CovenantFindUniqueArgs} args - Arguments to find a Covenant
     * @example
     * // Get one Covenant
     * const covenant = await prisma.covenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CovenantFindUniqueArgs>(args: SelectSubset<T, CovenantFindUniqueArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Covenant that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CovenantFindUniqueOrThrowArgs} args - Arguments to find a Covenant
     * @example
     * // Get one Covenant
     * const covenant = await prisma.covenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CovenantFindUniqueOrThrowArgs>(args: SelectSubset<T, CovenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Covenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovenantFindFirstArgs} args - Arguments to find a Covenant
     * @example
     * // Get one Covenant
     * const covenant = await prisma.covenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CovenantFindFirstArgs>(args?: SelectSubset<T, CovenantFindFirstArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Covenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovenantFindFirstOrThrowArgs} args - Arguments to find a Covenant
     * @example
     * // Get one Covenant
     * const covenant = await prisma.covenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CovenantFindFirstOrThrowArgs>(args?: SelectSubset<T, CovenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Covenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Covenants
     * const covenants = await prisma.covenant.findMany()
     * 
     * // Get first 10 Covenants
     * const covenants = await prisma.covenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const covenantWithIdOnly = await prisma.covenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CovenantFindManyArgs>(args?: SelectSubset<T, CovenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Covenant.
     * @param {CovenantCreateArgs} args - Arguments to create a Covenant.
     * @example
     * // Create one Covenant
     * const Covenant = await prisma.covenant.create({
     *   data: {
     *     // ... data to create a Covenant
     *   }
     * })
     * 
     */
    create<T extends CovenantCreateArgs>(args: SelectSubset<T, CovenantCreateArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Covenants.
     * @param {CovenantCreateManyArgs} args - Arguments to create many Covenants.
     * @example
     * // Create many Covenants
     * const covenant = await prisma.covenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CovenantCreateManyArgs>(args?: SelectSubset<T, CovenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Covenants and returns the data saved in the database.
     * @param {CovenantCreateManyAndReturnArgs} args - Arguments to create many Covenants.
     * @example
     * // Create many Covenants
     * const covenant = await prisma.covenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Covenants and only return the `id`
     * const covenantWithIdOnly = await prisma.covenant.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CovenantCreateManyAndReturnArgs>(args?: SelectSubset<T, CovenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Covenant.
     * @param {CovenantDeleteArgs} args - Arguments to delete one Covenant.
     * @example
     * // Delete one Covenant
     * const Covenant = await prisma.covenant.delete({
     *   where: {
     *     // ... filter to delete one Covenant
     *   }
     * })
     * 
     */
    delete<T extends CovenantDeleteArgs>(args: SelectSubset<T, CovenantDeleteArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Covenant.
     * @param {CovenantUpdateArgs} args - Arguments to update one Covenant.
     * @example
     * // Update one Covenant
     * const covenant = await prisma.covenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CovenantUpdateArgs>(args: SelectSubset<T, CovenantUpdateArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Covenants.
     * @param {CovenantDeleteManyArgs} args - Arguments to filter Covenants to delete.
     * @example
     * // Delete a few Covenants
     * const { count } = await prisma.covenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CovenantDeleteManyArgs>(args?: SelectSubset<T, CovenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Covenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Covenants
     * const covenant = await prisma.covenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CovenantUpdateManyArgs>(args: SelectSubset<T, CovenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Covenant.
     * @param {CovenantUpsertArgs} args - Arguments to update or create a Covenant.
     * @example
     * // Update or create a Covenant
     * const covenant = await prisma.covenant.upsert({
     *   create: {
     *     // ... data to create a Covenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Covenant we want to update
     *   }
     * })
     */
    upsert<T extends CovenantUpsertArgs>(args: SelectSubset<T, CovenantUpsertArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Covenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovenantCountArgs} args - Arguments to filter Covenants to count.
     * @example
     * // Count the number of Covenants
     * const count = await prisma.covenant.count({
     *   where: {
     *     // ... the filter for the Covenants we want to count
     *   }
     * })
    **/
    count<T extends CovenantCountArgs>(
      args?: Subset<T, CovenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CovenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Covenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CovenantAggregateArgs>(args: Subset<T, CovenantAggregateArgs>): Prisma.PrismaPromise<GetCovenantAggregateType<T>>

    /**
     * Group by Covenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CovenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CovenantGroupByArgs['orderBy'] }
        : { orderBy?: CovenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CovenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCovenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Covenant model
   */
  readonly fields: CovenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Covenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CovenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cupons<T extends Covenant$cuponsArgs<ExtArgs> = {}>(args?: Subset<T, Covenant$cuponsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends Covenant$UserArgs<ExtArgs> = {}>(args?: Subset<T, Covenant$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Covenant model
   */ 
  interface CovenantFieldRefs {
    readonly id: FieldRef<"Covenant", 'Int'>
    readonly name: FieldRef<"Covenant", 'String'>
    readonly cnpj: FieldRef<"Covenant", 'String'>
    readonly slug: FieldRef<"Covenant", 'String'>
    readonly userId: FieldRef<"Covenant", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Covenant findUnique
   */
  export type CovenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    /**
     * Filter, which Covenant to fetch.
     */
    where: CovenantWhereUniqueInput
  }

  /**
   * Covenant findUniqueOrThrow
   */
  export type CovenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    /**
     * Filter, which Covenant to fetch.
     */
    where: CovenantWhereUniqueInput
  }

  /**
   * Covenant findFirst
   */
  export type CovenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    /**
     * Filter, which Covenant to fetch.
     */
    where?: CovenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covenants to fetch.
     */
    orderBy?: CovenantOrderByWithRelationInput | CovenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Covenants.
     */
    cursor?: CovenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Covenants.
     */
    distinct?: CovenantScalarFieldEnum | CovenantScalarFieldEnum[]
  }

  /**
   * Covenant findFirstOrThrow
   */
  export type CovenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    /**
     * Filter, which Covenant to fetch.
     */
    where?: CovenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covenants to fetch.
     */
    orderBy?: CovenantOrderByWithRelationInput | CovenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Covenants.
     */
    cursor?: CovenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Covenants.
     */
    distinct?: CovenantScalarFieldEnum | CovenantScalarFieldEnum[]
  }

  /**
   * Covenant findMany
   */
  export type CovenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    /**
     * Filter, which Covenants to fetch.
     */
    where?: CovenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covenants to fetch.
     */
    orderBy?: CovenantOrderByWithRelationInput | CovenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Covenants.
     */
    cursor?: CovenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covenants.
     */
    skip?: number
    distinct?: CovenantScalarFieldEnum | CovenantScalarFieldEnum[]
  }

  /**
   * Covenant create
   */
  export type CovenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Covenant.
     */
    data: XOR<CovenantCreateInput, CovenantUncheckedCreateInput>
  }

  /**
   * Covenant createMany
   */
  export type CovenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Covenants.
     */
    data: CovenantCreateManyInput | CovenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Covenant createManyAndReturn
   */
  export type CovenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Covenants.
     */
    data: CovenantCreateManyInput | CovenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Covenant update
   */
  export type CovenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Covenant.
     */
    data: XOR<CovenantUpdateInput, CovenantUncheckedUpdateInput>
    /**
     * Choose, which Covenant to update.
     */
    where: CovenantWhereUniqueInput
  }

  /**
   * Covenant updateMany
   */
  export type CovenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Covenants.
     */
    data: XOR<CovenantUpdateManyMutationInput, CovenantUncheckedUpdateManyInput>
    /**
     * Filter which Covenants to update
     */
    where?: CovenantWhereInput
  }

  /**
   * Covenant upsert
   */
  export type CovenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Covenant to update in case it exists.
     */
    where: CovenantWhereUniqueInput
    /**
     * In case the Covenant found by the `where` argument doesn't exist, create a new Covenant with this data.
     */
    create: XOR<CovenantCreateInput, CovenantUncheckedCreateInput>
    /**
     * In case the Covenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CovenantUpdateInput, CovenantUncheckedUpdateInput>
  }

  /**
   * Covenant delete
   */
  export type CovenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    /**
     * Filter which Covenant to delete.
     */
    where: CovenantWhereUniqueInput
  }

  /**
   * Covenant deleteMany
   */
  export type CovenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Covenants to delete
     */
    where?: CovenantWhereInput
  }

  /**
   * Covenant.cupons
   */
  export type Covenant$cuponsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    where?: CuponWhereInput
    orderBy?: CuponOrderByWithRelationInput | CuponOrderByWithRelationInput[]
    cursor?: CuponWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CuponScalarFieldEnum | CuponScalarFieldEnum[]
  }

  /**
   * Covenant.User
   */
  export type Covenant$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Covenant without action
   */
  export type CovenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
  }


  /**
   * Model Cupon
   */

  export type AggregateCupon = {
    _count: CuponCountAggregateOutputType | null
    _avg: CuponAvgAggregateOutputType | null
    _sum: CuponSumAggregateOutputType | null
    _min: CuponMinAggregateOutputType | null
    _max: CuponMaxAggregateOutputType | null
  }

  export type CuponAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
    covenantId: number | null
  }

  export type CuponSumAggregateOutputType = {
    id: number | null
    value: Decimal | null
    covenantId: number | null
  }

  export type CuponMinAggregateOutputType = {
    id: number | null
    date: Date | null
    code: string | null
    value: Decimal | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    covenantId: number | null
  }

  export type CuponMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    code: string | null
    value: Decimal | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    covenantId: number | null
  }

  export type CuponCountAggregateOutputType = {
    id: number
    date: number
    code: number
    value: number
    address: number
    createdAt: number
    updatedAt: number
    covenantId: number
    _all: number
  }


  export type CuponAvgAggregateInputType = {
    id?: true
    value?: true
    covenantId?: true
  }

  export type CuponSumAggregateInputType = {
    id?: true
    value?: true
    covenantId?: true
  }

  export type CuponMinAggregateInputType = {
    id?: true
    date?: true
    code?: true
    value?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    covenantId?: true
  }

  export type CuponMaxAggregateInputType = {
    id?: true
    date?: true
    code?: true
    value?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    covenantId?: true
  }

  export type CuponCountAggregateInputType = {
    id?: true
    date?: true
    code?: true
    value?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    covenantId?: true
    _all?: true
  }

  export type CuponAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cupon to aggregate.
     */
    where?: CuponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cupons to fetch.
     */
    orderBy?: CuponOrderByWithRelationInput | CuponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CuponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cupons
    **/
    _count?: true | CuponCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CuponAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CuponSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CuponMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CuponMaxAggregateInputType
  }

  export type GetCuponAggregateType<T extends CuponAggregateArgs> = {
        [P in keyof T & keyof AggregateCupon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCupon[P]>
      : GetScalarType<T[P], AggregateCupon[P]>
  }




  export type CuponGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CuponWhereInput
    orderBy?: CuponOrderByWithAggregationInput | CuponOrderByWithAggregationInput[]
    by: CuponScalarFieldEnum[] | CuponScalarFieldEnum
    having?: CuponScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CuponCountAggregateInputType | true
    _avg?: CuponAvgAggregateInputType
    _sum?: CuponSumAggregateInputType
    _min?: CuponMinAggregateInputType
    _max?: CuponMaxAggregateInputType
  }

  export type CuponGroupByOutputType = {
    id: number
    date: Date
    code: string
    value: Decimal
    address: string | null
    createdAt: Date
    updatedAt: Date
    covenantId: number
    _count: CuponCountAggregateOutputType | null
    _avg: CuponAvgAggregateOutputType | null
    _sum: CuponSumAggregateOutputType | null
    _min: CuponMinAggregateOutputType | null
    _max: CuponMaxAggregateOutputType | null
  }

  type GetCuponGroupByPayload<T extends CuponGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CuponGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CuponGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CuponGroupByOutputType[P]>
            : GetScalarType<T[P], CuponGroupByOutputType[P]>
        }
      >
    >


  export type CuponSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    code?: boolean
    value?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    covenantId?: boolean
    Covenant?: boolean | CovenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cupon"]>

  export type CuponSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    code?: boolean
    value?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    covenantId?: boolean
    Covenant?: boolean | CovenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cupon"]>

  export type CuponSelectScalar = {
    id?: boolean
    date?: boolean
    code?: boolean
    value?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    covenantId?: boolean
  }

  export type CuponInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Covenant?: boolean | CovenantDefaultArgs<ExtArgs>
  }
  export type CuponIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Covenant?: boolean | CovenantDefaultArgs<ExtArgs>
  }

  export type $CuponPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cupon"
    objects: {
      Covenant: Prisma.$CovenantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      code: string
      value: Prisma.Decimal
      address: string | null
      createdAt: Date
      updatedAt: Date
      covenantId: number
    }, ExtArgs["result"]["cupon"]>
    composites: {}
  }

  type CuponGetPayload<S extends boolean | null | undefined | CuponDefaultArgs> = $Result.GetResult<Prisma.$CuponPayload, S>

  type CuponCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CuponFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CuponCountAggregateInputType | true
    }

  export interface CuponDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cupon'], meta: { name: 'Cupon' } }
    /**
     * Find zero or one Cupon that matches the filter.
     * @param {CuponFindUniqueArgs} args - Arguments to find a Cupon
     * @example
     * // Get one Cupon
     * const cupon = await prisma.cupon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CuponFindUniqueArgs>(args: SelectSubset<T, CuponFindUniqueArgs<ExtArgs>>): Prisma__CuponClient<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cupon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CuponFindUniqueOrThrowArgs} args - Arguments to find a Cupon
     * @example
     * // Get one Cupon
     * const cupon = await prisma.cupon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CuponFindUniqueOrThrowArgs>(args: SelectSubset<T, CuponFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CuponClient<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cupon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuponFindFirstArgs} args - Arguments to find a Cupon
     * @example
     * // Get one Cupon
     * const cupon = await prisma.cupon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CuponFindFirstArgs>(args?: SelectSubset<T, CuponFindFirstArgs<ExtArgs>>): Prisma__CuponClient<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cupon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuponFindFirstOrThrowArgs} args - Arguments to find a Cupon
     * @example
     * // Get one Cupon
     * const cupon = await prisma.cupon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CuponFindFirstOrThrowArgs>(args?: SelectSubset<T, CuponFindFirstOrThrowArgs<ExtArgs>>): Prisma__CuponClient<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cupons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuponFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cupons
     * const cupons = await prisma.cupon.findMany()
     * 
     * // Get first 10 Cupons
     * const cupons = await prisma.cupon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cuponWithIdOnly = await prisma.cupon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CuponFindManyArgs>(args?: SelectSubset<T, CuponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cupon.
     * @param {CuponCreateArgs} args - Arguments to create a Cupon.
     * @example
     * // Create one Cupon
     * const Cupon = await prisma.cupon.create({
     *   data: {
     *     // ... data to create a Cupon
     *   }
     * })
     * 
     */
    create<T extends CuponCreateArgs>(args: SelectSubset<T, CuponCreateArgs<ExtArgs>>): Prisma__CuponClient<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cupons.
     * @param {CuponCreateManyArgs} args - Arguments to create many Cupons.
     * @example
     * // Create many Cupons
     * const cupon = await prisma.cupon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CuponCreateManyArgs>(args?: SelectSubset<T, CuponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cupons and returns the data saved in the database.
     * @param {CuponCreateManyAndReturnArgs} args - Arguments to create many Cupons.
     * @example
     * // Create many Cupons
     * const cupon = await prisma.cupon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cupons and only return the `id`
     * const cuponWithIdOnly = await prisma.cupon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CuponCreateManyAndReturnArgs>(args?: SelectSubset<T, CuponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cupon.
     * @param {CuponDeleteArgs} args - Arguments to delete one Cupon.
     * @example
     * // Delete one Cupon
     * const Cupon = await prisma.cupon.delete({
     *   where: {
     *     // ... filter to delete one Cupon
     *   }
     * })
     * 
     */
    delete<T extends CuponDeleteArgs>(args: SelectSubset<T, CuponDeleteArgs<ExtArgs>>): Prisma__CuponClient<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cupon.
     * @param {CuponUpdateArgs} args - Arguments to update one Cupon.
     * @example
     * // Update one Cupon
     * const cupon = await prisma.cupon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CuponUpdateArgs>(args: SelectSubset<T, CuponUpdateArgs<ExtArgs>>): Prisma__CuponClient<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cupons.
     * @param {CuponDeleteManyArgs} args - Arguments to filter Cupons to delete.
     * @example
     * // Delete a few Cupons
     * const { count } = await prisma.cupon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CuponDeleteManyArgs>(args?: SelectSubset<T, CuponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuponUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cupons
     * const cupon = await prisma.cupon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CuponUpdateManyArgs>(args: SelectSubset<T, CuponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cupon.
     * @param {CuponUpsertArgs} args - Arguments to update or create a Cupon.
     * @example
     * // Update or create a Cupon
     * const cupon = await prisma.cupon.upsert({
     *   create: {
     *     // ... data to create a Cupon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cupon we want to update
     *   }
     * })
     */
    upsert<T extends CuponUpsertArgs>(args: SelectSubset<T, CuponUpsertArgs<ExtArgs>>): Prisma__CuponClient<$Result.GetResult<Prisma.$CuponPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cupons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuponCountArgs} args - Arguments to filter Cupons to count.
     * @example
     * // Count the number of Cupons
     * const count = await prisma.cupon.count({
     *   where: {
     *     // ... the filter for the Cupons we want to count
     *   }
     * })
    **/
    count<T extends CuponCountArgs>(
      args?: Subset<T, CuponCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CuponCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuponAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CuponAggregateArgs>(args: Subset<T, CuponAggregateArgs>): Prisma.PrismaPromise<GetCuponAggregateType<T>>

    /**
     * Group by Cupon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuponGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CuponGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CuponGroupByArgs['orderBy'] }
        : { orderBy?: CuponGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CuponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cupon model
   */
  readonly fields: CuponFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cupon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CuponClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Covenant<T extends CovenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CovenantDefaultArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cupon model
   */ 
  interface CuponFieldRefs {
    readonly id: FieldRef<"Cupon", 'Int'>
    readonly date: FieldRef<"Cupon", 'DateTime'>
    readonly code: FieldRef<"Cupon", 'String'>
    readonly value: FieldRef<"Cupon", 'Decimal'>
    readonly address: FieldRef<"Cupon", 'String'>
    readonly createdAt: FieldRef<"Cupon", 'DateTime'>
    readonly updatedAt: FieldRef<"Cupon", 'DateTime'>
    readonly covenantId: FieldRef<"Cupon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cupon findUnique
   */
  export type CuponFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    /**
     * Filter, which Cupon to fetch.
     */
    where: CuponWhereUniqueInput
  }

  /**
   * Cupon findUniqueOrThrow
   */
  export type CuponFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    /**
     * Filter, which Cupon to fetch.
     */
    where: CuponWhereUniqueInput
  }

  /**
   * Cupon findFirst
   */
  export type CuponFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    /**
     * Filter, which Cupon to fetch.
     */
    where?: CuponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cupons to fetch.
     */
    orderBy?: CuponOrderByWithRelationInput | CuponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cupons.
     */
    cursor?: CuponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cupons.
     */
    distinct?: CuponScalarFieldEnum | CuponScalarFieldEnum[]
  }

  /**
   * Cupon findFirstOrThrow
   */
  export type CuponFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    /**
     * Filter, which Cupon to fetch.
     */
    where?: CuponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cupons to fetch.
     */
    orderBy?: CuponOrderByWithRelationInput | CuponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cupons.
     */
    cursor?: CuponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cupons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cupons.
     */
    distinct?: CuponScalarFieldEnum | CuponScalarFieldEnum[]
  }

  /**
   * Cupon findMany
   */
  export type CuponFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    /**
     * Filter, which Cupons to fetch.
     */
    where?: CuponWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cupons to fetch.
     */
    orderBy?: CuponOrderByWithRelationInput | CuponOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cupons.
     */
    cursor?: CuponWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cupons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cupons.
     */
    skip?: number
    distinct?: CuponScalarFieldEnum | CuponScalarFieldEnum[]
  }

  /**
   * Cupon create
   */
  export type CuponCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    /**
     * The data needed to create a Cupon.
     */
    data: XOR<CuponCreateInput, CuponUncheckedCreateInput>
  }

  /**
   * Cupon createMany
   */
  export type CuponCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cupons.
     */
    data: CuponCreateManyInput | CuponCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cupon createManyAndReturn
   */
  export type CuponCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cupons.
     */
    data: CuponCreateManyInput | CuponCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cupon update
   */
  export type CuponUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    /**
     * The data needed to update a Cupon.
     */
    data: XOR<CuponUpdateInput, CuponUncheckedUpdateInput>
    /**
     * Choose, which Cupon to update.
     */
    where: CuponWhereUniqueInput
  }

  /**
   * Cupon updateMany
   */
  export type CuponUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cupons.
     */
    data: XOR<CuponUpdateManyMutationInput, CuponUncheckedUpdateManyInput>
    /**
     * Filter which Cupons to update
     */
    where?: CuponWhereInput
  }

  /**
   * Cupon upsert
   */
  export type CuponUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    /**
     * The filter to search for the Cupon to update in case it exists.
     */
    where: CuponWhereUniqueInput
    /**
     * In case the Cupon found by the `where` argument doesn't exist, create a new Cupon with this data.
     */
    create: XOR<CuponCreateInput, CuponUncheckedCreateInput>
    /**
     * In case the Cupon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CuponUpdateInput, CuponUncheckedUpdateInput>
  }

  /**
   * Cupon delete
   */
  export type CuponDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
    /**
     * Filter which Cupon to delete.
     */
    where: CuponWhereUniqueInput
  }

  /**
   * Cupon deleteMany
   */
  export type CuponDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cupons to delete
     */
    where?: CuponWhereInput
  }

  /**
   * Cupon without action
   */
  export type CuponDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cupon
     */
    select?: CuponSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CuponInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userName: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userName: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userName?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userName: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Covenant?: boolean | User$CovenantArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userName?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Covenant?: boolean | User$CovenantArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Covenant: Prisma.$CovenantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userName: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Covenant<T extends User$CovenantArgs<ExtArgs> = {}>(args?: Subset<T, User$CovenantArgs<ExtArgs>>): Prisma__CovenantClient<$Result.GetResult<Prisma.$CovenantPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Covenant
   */
  export type User$CovenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covenant
     */
    select?: CovenantSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovenantInclude<ExtArgs> | null
    where?: CovenantWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CovenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cnpj: 'cnpj',
    slug: 'slug',
    userId: 'userId'
  };

  export type CovenantScalarFieldEnum = (typeof CovenantScalarFieldEnum)[keyof typeof CovenantScalarFieldEnum]


  export const CuponScalarFieldEnum: {
    id: 'id',
    date: 'date',
    code: 'code',
    value: 'value',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    covenantId: 'covenantId'
  };

  export type CuponScalarFieldEnum = (typeof CuponScalarFieldEnum)[keyof typeof CuponScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CovenantWhereInput = {
    AND?: CovenantWhereInput | CovenantWhereInput[]
    OR?: CovenantWhereInput[]
    NOT?: CovenantWhereInput | CovenantWhereInput[]
    id?: IntFilter<"Covenant"> | number
    name?: StringFilter<"Covenant"> | string
    cnpj?: StringFilter<"Covenant"> | string
    slug?: StringFilter<"Covenant"> | string
    userId?: IntNullableFilter<"Covenant"> | number | null
    cupons?: CuponListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type CovenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    slug?: SortOrder
    userId?: SortOrderInput | SortOrder
    cupons?: CuponOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type CovenantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    slug?: string
    userId?: number
    AND?: CovenantWhereInput | CovenantWhereInput[]
    OR?: CovenantWhereInput[]
    NOT?: CovenantWhereInput | CovenantWhereInput[]
    name?: StringFilter<"Covenant"> | string
    cupons?: CuponListRelationFilter
    User?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "cnpj" | "slug" | "userId">

  export type CovenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    slug?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: CovenantCountOrderByAggregateInput
    _avg?: CovenantAvgOrderByAggregateInput
    _max?: CovenantMaxOrderByAggregateInput
    _min?: CovenantMinOrderByAggregateInput
    _sum?: CovenantSumOrderByAggregateInput
  }

  export type CovenantScalarWhereWithAggregatesInput = {
    AND?: CovenantScalarWhereWithAggregatesInput | CovenantScalarWhereWithAggregatesInput[]
    OR?: CovenantScalarWhereWithAggregatesInput[]
    NOT?: CovenantScalarWhereWithAggregatesInput | CovenantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Covenant"> | number
    name?: StringWithAggregatesFilter<"Covenant"> | string
    cnpj?: StringWithAggregatesFilter<"Covenant"> | string
    slug?: StringWithAggregatesFilter<"Covenant"> | string
    userId?: IntNullableWithAggregatesFilter<"Covenant"> | number | null
  }

  export type CuponWhereInput = {
    AND?: CuponWhereInput | CuponWhereInput[]
    OR?: CuponWhereInput[]
    NOT?: CuponWhereInput | CuponWhereInput[]
    id?: IntFilter<"Cupon"> | number
    date?: DateTimeFilter<"Cupon"> | Date | string
    code?: StringFilter<"Cupon"> | string
    value?: DecimalFilter<"Cupon"> | Decimal | DecimalJsLike | number | string
    address?: StringNullableFilter<"Cupon"> | string | null
    createdAt?: DateTimeFilter<"Cupon"> | Date | string
    updatedAt?: DateTimeFilter<"Cupon"> | Date | string
    covenantId?: IntFilter<"Cupon"> | number
    Covenant?: XOR<CovenantRelationFilter, CovenantWhereInput>
  }

  export type CuponOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    value?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    covenantId?: SortOrder
    Covenant?: CovenantOrderByWithRelationInput
  }

  export type CuponWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CuponWhereInput | CuponWhereInput[]
    OR?: CuponWhereInput[]
    NOT?: CuponWhereInput | CuponWhereInput[]
    date?: DateTimeFilter<"Cupon"> | Date | string
    code?: StringFilter<"Cupon"> | string
    value?: DecimalFilter<"Cupon"> | Decimal | DecimalJsLike | number | string
    address?: StringNullableFilter<"Cupon"> | string | null
    createdAt?: DateTimeFilter<"Cupon"> | Date | string
    updatedAt?: DateTimeFilter<"Cupon"> | Date | string
    covenantId?: IntFilter<"Cupon"> | number
    Covenant?: XOR<CovenantRelationFilter, CovenantWhereInput>
  }, "id">

  export type CuponOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    value?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    covenantId?: SortOrder
    _count?: CuponCountOrderByAggregateInput
    _avg?: CuponAvgOrderByAggregateInput
    _max?: CuponMaxOrderByAggregateInput
    _min?: CuponMinOrderByAggregateInput
    _sum?: CuponSumOrderByAggregateInput
  }

  export type CuponScalarWhereWithAggregatesInput = {
    AND?: CuponScalarWhereWithAggregatesInput | CuponScalarWhereWithAggregatesInput[]
    OR?: CuponScalarWhereWithAggregatesInput[]
    NOT?: CuponScalarWhereWithAggregatesInput | CuponScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cupon"> | number
    date?: DateTimeWithAggregatesFilter<"Cupon"> | Date | string
    code?: StringWithAggregatesFilter<"Cupon"> | string
    value?: DecimalWithAggregatesFilter<"Cupon"> | Decimal | DecimalJsLike | number | string
    address?: StringNullableWithAggregatesFilter<"Cupon"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cupon"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cupon"> | Date | string
    covenantId?: IntWithAggregatesFilter<"Cupon"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Covenant?: XOR<CovenantNullableRelationFilter, CovenantWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Covenant?: CovenantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userName?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Covenant?: XOR<CovenantNullableRelationFilter, CovenantWhereInput> | null
  }, "id" | "userName">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CovenantCreateInput = {
    name: string
    cnpj: string
    slug: string
    cupons?: CuponCreateNestedManyWithoutCovenantInput
    User?: UserCreateNestedOneWithoutCovenantInput
  }

  export type CovenantUncheckedCreateInput = {
    id?: number
    name: string
    cnpj: string
    slug: string
    userId?: number | null
    cupons?: CuponUncheckedCreateNestedManyWithoutCovenantInput
  }

  export type CovenantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cupons?: CuponUpdateManyWithoutCovenantNestedInput
    User?: UserUpdateOneWithoutCovenantNestedInput
  }

  export type CovenantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    cupons?: CuponUncheckedUpdateManyWithoutCovenantNestedInput
  }

  export type CovenantCreateManyInput = {
    id?: number
    name: string
    cnpj: string
    slug: string
    userId?: number | null
  }

  export type CovenantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CovenantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CuponCreateInput = {
    date: Date | string
    code: string
    value: Decimal | DecimalJsLike | number | string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Covenant: CovenantCreateNestedOneWithoutCuponsInput
  }

  export type CuponUncheckedCreateInput = {
    id?: number
    date: Date | string
    code: string
    value: Decimal | DecimalJsLike | number | string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    covenantId: number
  }

  export type CuponUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Covenant?: CovenantUpdateOneRequiredWithoutCuponsNestedInput
  }

  export type CuponUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    covenantId?: IntFieldUpdateOperationsInput | number
  }

  export type CuponCreateManyInput = {
    id?: number
    date: Date | string
    code: string
    value: Decimal | DecimalJsLike | number | string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    covenantId: number
  }

  export type CuponUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuponUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    covenantId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    userName: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Covenant?: CovenantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userName: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    Covenant?: CovenantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Covenant?: CovenantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Covenant?: CovenantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userName: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CuponListRelationFilter = {
    every?: CuponWhereInput
    some?: CuponWhereInput
    none?: CuponWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CuponOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CovenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    slug?: SortOrder
    userId?: SortOrder
  }

  export type CovenantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CovenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    slug?: SortOrder
    userId?: SortOrder
  }

  export type CovenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    slug?: SortOrder
    userId?: SortOrder
  }

  export type CovenantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CovenantRelationFilter = {
    is?: CovenantWhereInput
    isNot?: CovenantWhereInput
  }

  export type CuponCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    value?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    covenantId?: SortOrder
  }

  export type CuponAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    covenantId?: SortOrder
  }

  export type CuponMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    value?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    covenantId?: SortOrder
  }

  export type CuponMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    code?: SortOrder
    value?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    covenantId?: SortOrder
  }

  export type CuponSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    covenantId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type CovenantNullableRelationFilter = {
    is?: CovenantWhereInput | null
    isNot?: CovenantWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CuponCreateNestedManyWithoutCovenantInput = {
    create?: XOR<CuponCreateWithoutCovenantInput, CuponUncheckedCreateWithoutCovenantInput> | CuponCreateWithoutCovenantInput[] | CuponUncheckedCreateWithoutCovenantInput[]
    connectOrCreate?: CuponCreateOrConnectWithoutCovenantInput | CuponCreateOrConnectWithoutCovenantInput[]
    createMany?: CuponCreateManyCovenantInputEnvelope
    connect?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCovenantInput = {
    create?: XOR<UserCreateWithoutCovenantInput, UserUncheckedCreateWithoutCovenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutCovenantInput
    connect?: UserWhereUniqueInput
  }

  export type CuponUncheckedCreateNestedManyWithoutCovenantInput = {
    create?: XOR<CuponCreateWithoutCovenantInput, CuponUncheckedCreateWithoutCovenantInput> | CuponCreateWithoutCovenantInput[] | CuponUncheckedCreateWithoutCovenantInput[]
    connectOrCreate?: CuponCreateOrConnectWithoutCovenantInput | CuponCreateOrConnectWithoutCovenantInput[]
    createMany?: CuponCreateManyCovenantInputEnvelope
    connect?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CuponUpdateManyWithoutCovenantNestedInput = {
    create?: XOR<CuponCreateWithoutCovenantInput, CuponUncheckedCreateWithoutCovenantInput> | CuponCreateWithoutCovenantInput[] | CuponUncheckedCreateWithoutCovenantInput[]
    connectOrCreate?: CuponCreateOrConnectWithoutCovenantInput | CuponCreateOrConnectWithoutCovenantInput[]
    upsert?: CuponUpsertWithWhereUniqueWithoutCovenantInput | CuponUpsertWithWhereUniqueWithoutCovenantInput[]
    createMany?: CuponCreateManyCovenantInputEnvelope
    set?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
    disconnect?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
    delete?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
    connect?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
    update?: CuponUpdateWithWhereUniqueWithoutCovenantInput | CuponUpdateWithWhereUniqueWithoutCovenantInput[]
    updateMany?: CuponUpdateManyWithWhereWithoutCovenantInput | CuponUpdateManyWithWhereWithoutCovenantInput[]
    deleteMany?: CuponScalarWhereInput | CuponScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCovenantNestedInput = {
    create?: XOR<UserCreateWithoutCovenantInput, UserUncheckedCreateWithoutCovenantInput>
    connectOrCreate?: UserCreateOrConnectWithoutCovenantInput
    upsert?: UserUpsertWithoutCovenantInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCovenantInput, UserUpdateWithoutCovenantInput>, UserUncheckedUpdateWithoutCovenantInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CuponUncheckedUpdateManyWithoutCovenantNestedInput = {
    create?: XOR<CuponCreateWithoutCovenantInput, CuponUncheckedCreateWithoutCovenantInput> | CuponCreateWithoutCovenantInput[] | CuponUncheckedCreateWithoutCovenantInput[]
    connectOrCreate?: CuponCreateOrConnectWithoutCovenantInput | CuponCreateOrConnectWithoutCovenantInput[]
    upsert?: CuponUpsertWithWhereUniqueWithoutCovenantInput | CuponUpsertWithWhereUniqueWithoutCovenantInput[]
    createMany?: CuponCreateManyCovenantInputEnvelope
    set?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
    disconnect?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
    delete?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
    connect?: CuponWhereUniqueInput | CuponWhereUniqueInput[]
    update?: CuponUpdateWithWhereUniqueWithoutCovenantInput | CuponUpdateWithWhereUniqueWithoutCovenantInput[]
    updateMany?: CuponUpdateManyWithWhereWithoutCovenantInput | CuponUpdateManyWithWhereWithoutCovenantInput[]
    deleteMany?: CuponScalarWhereInput | CuponScalarWhereInput[]
  }

  export type CovenantCreateNestedOneWithoutCuponsInput = {
    create?: XOR<CovenantCreateWithoutCuponsInput, CovenantUncheckedCreateWithoutCuponsInput>
    connectOrCreate?: CovenantCreateOrConnectWithoutCuponsInput
    connect?: CovenantWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CovenantUpdateOneRequiredWithoutCuponsNestedInput = {
    create?: XOR<CovenantCreateWithoutCuponsInput, CovenantUncheckedCreateWithoutCuponsInput>
    connectOrCreate?: CovenantCreateOrConnectWithoutCuponsInput
    upsert?: CovenantUpsertWithoutCuponsInput
    connect?: CovenantWhereUniqueInput
    update?: XOR<XOR<CovenantUpdateToOneWithWhereWithoutCuponsInput, CovenantUpdateWithoutCuponsInput>, CovenantUncheckedUpdateWithoutCuponsInput>
  }

  export type CovenantCreateNestedOneWithoutUserInput = {
    create?: XOR<CovenantCreateWithoutUserInput, CovenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: CovenantCreateOrConnectWithoutUserInput
    connect?: CovenantWhereUniqueInput
  }

  export type CovenantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CovenantCreateWithoutUserInput, CovenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: CovenantCreateOrConnectWithoutUserInput
    connect?: CovenantWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type CovenantUpdateOneWithoutUserNestedInput = {
    create?: XOR<CovenantCreateWithoutUserInput, CovenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: CovenantCreateOrConnectWithoutUserInput
    upsert?: CovenantUpsertWithoutUserInput
    disconnect?: CovenantWhereInput | boolean
    delete?: CovenantWhereInput | boolean
    connect?: CovenantWhereUniqueInput
    update?: XOR<XOR<CovenantUpdateToOneWithWhereWithoutUserInput, CovenantUpdateWithoutUserInput>, CovenantUncheckedUpdateWithoutUserInput>
  }

  export type CovenantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CovenantCreateWithoutUserInput, CovenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: CovenantCreateOrConnectWithoutUserInput
    upsert?: CovenantUpsertWithoutUserInput
    disconnect?: CovenantWhereInput | boolean
    delete?: CovenantWhereInput | boolean
    connect?: CovenantWhereUniqueInput
    update?: XOR<XOR<CovenantUpdateToOneWithWhereWithoutUserInput, CovenantUpdateWithoutUserInput>, CovenantUncheckedUpdateWithoutUserInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CuponCreateWithoutCovenantInput = {
    date: Date | string
    code: string
    value: Decimal | DecimalJsLike | number | string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuponUncheckedCreateWithoutCovenantInput = {
    id?: number
    date: Date | string
    code: string
    value: Decimal | DecimalJsLike | number | string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuponCreateOrConnectWithoutCovenantInput = {
    where: CuponWhereUniqueInput
    create: XOR<CuponCreateWithoutCovenantInput, CuponUncheckedCreateWithoutCovenantInput>
  }

  export type CuponCreateManyCovenantInputEnvelope = {
    data: CuponCreateManyCovenantInput | CuponCreateManyCovenantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCovenantInput = {
    userName: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCovenantInput = {
    id?: number
    userName: string
    password: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCovenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCovenantInput, UserUncheckedCreateWithoutCovenantInput>
  }

  export type CuponUpsertWithWhereUniqueWithoutCovenantInput = {
    where: CuponWhereUniqueInput
    update: XOR<CuponUpdateWithoutCovenantInput, CuponUncheckedUpdateWithoutCovenantInput>
    create: XOR<CuponCreateWithoutCovenantInput, CuponUncheckedCreateWithoutCovenantInput>
  }

  export type CuponUpdateWithWhereUniqueWithoutCovenantInput = {
    where: CuponWhereUniqueInput
    data: XOR<CuponUpdateWithoutCovenantInput, CuponUncheckedUpdateWithoutCovenantInput>
  }

  export type CuponUpdateManyWithWhereWithoutCovenantInput = {
    where: CuponScalarWhereInput
    data: XOR<CuponUpdateManyMutationInput, CuponUncheckedUpdateManyWithoutCovenantInput>
  }

  export type CuponScalarWhereInput = {
    AND?: CuponScalarWhereInput | CuponScalarWhereInput[]
    OR?: CuponScalarWhereInput[]
    NOT?: CuponScalarWhereInput | CuponScalarWhereInput[]
    id?: IntFilter<"Cupon"> | number
    date?: DateTimeFilter<"Cupon"> | Date | string
    code?: StringFilter<"Cupon"> | string
    value?: DecimalFilter<"Cupon"> | Decimal | DecimalJsLike | number | string
    address?: StringNullableFilter<"Cupon"> | string | null
    createdAt?: DateTimeFilter<"Cupon"> | Date | string
    updatedAt?: DateTimeFilter<"Cupon"> | Date | string
    covenantId?: IntFilter<"Cupon"> | number
  }

  export type UserUpsertWithoutCovenantInput = {
    update: XOR<UserUpdateWithoutCovenantInput, UserUncheckedUpdateWithoutCovenantInput>
    create: XOR<UserCreateWithoutCovenantInput, UserUncheckedCreateWithoutCovenantInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCovenantInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCovenantInput, UserUncheckedUpdateWithoutCovenantInput>
  }

  export type UserUpdateWithoutCovenantInput = {
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCovenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    userName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CovenantCreateWithoutCuponsInput = {
    name: string
    cnpj: string
    slug: string
    User?: UserCreateNestedOneWithoutCovenantInput
  }

  export type CovenantUncheckedCreateWithoutCuponsInput = {
    id?: number
    name: string
    cnpj: string
    slug: string
    userId?: number | null
  }

  export type CovenantCreateOrConnectWithoutCuponsInput = {
    where: CovenantWhereUniqueInput
    create: XOR<CovenantCreateWithoutCuponsInput, CovenantUncheckedCreateWithoutCuponsInput>
  }

  export type CovenantUpsertWithoutCuponsInput = {
    update: XOR<CovenantUpdateWithoutCuponsInput, CovenantUncheckedUpdateWithoutCuponsInput>
    create: XOR<CovenantCreateWithoutCuponsInput, CovenantUncheckedCreateWithoutCuponsInput>
    where?: CovenantWhereInput
  }

  export type CovenantUpdateToOneWithWhereWithoutCuponsInput = {
    where?: CovenantWhereInput
    data: XOR<CovenantUpdateWithoutCuponsInput, CovenantUncheckedUpdateWithoutCuponsInput>
  }

  export type CovenantUpdateWithoutCuponsInput = {
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    User?: UserUpdateOneWithoutCovenantNestedInput
  }

  export type CovenantUncheckedUpdateWithoutCuponsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CovenantCreateWithoutUserInput = {
    name: string
    cnpj: string
    slug: string
    cupons?: CuponCreateNestedManyWithoutCovenantInput
  }

  export type CovenantUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    cnpj: string
    slug: string
    cupons?: CuponUncheckedCreateNestedManyWithoutCovenantInput
  }

  export type CovenantCreateOrConnectWithoutUserInput = {
    where: CovenantWhereUniqueInput
    create: XOR<CovenantCreateWithoutUserInput, CovenantUncheckedCreateWithoutUserInput>
  }

  export type CovenantUpsertWithoutUserInput = {
    update: XOR<CovenantUpdateWithoutUserInput, CovenantUncheckedUpdateWithoutUserInput>
    create: XOR<CovenantCreateWithoutUserInput, CovenantUncheckedCreateWithoutUserInput>
    where?: CovenantWhereInput
  }

  export type CovenantUpdateToOneWithWhereWithoutUserInput = {
    where?: CovenantWhereInput
    data: XOR<CovenantUpdateWithoutUserInput, CovenantUncheckedUpdateWithoutUserInput>
  }

  export type CovenantUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cupons?: CuponUpdateManyWithoutCovenantNestedInput
  }

  export type CovenantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    cupons?: CuponUncheckedUpdateManyWithoutCovenantNestedInput
  }

  export type CuponCreateManyCovenantInput = {
    id?: number
    date: Date | string
    code: string
    value: Decimal | DecimalJsLike | number | string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CuponUpdateWithoutCovenantInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuponUncheckedUpdateWithoutCovenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CuponUncheckedUpdateManyWithoutCovenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    code?: StringFieldUpdateOperationsInput | string
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CovenantCountOutputTypeDefaultArgs instead
     */
    export type CovenantCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CovenantCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CovenantDefaultArgs instead
     */
    export type CovenantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CovenantDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CuponDefaultArgs instead
     */
    export type CuponArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CuponDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}