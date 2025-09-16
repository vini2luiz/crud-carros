
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
 * Model Veiculo
 * 
 */
export type Veiculo = $Result.DefaultSelection<Prisma.$VeiculoPayload>
/**
 * Model Acessorio
 * 
 */
export type Acessorio = $Result.DefaultSelection<Prisma.$AcessorioPayload>
/**
 * Model VeiculoAcessorio
 * 
 */
export type VeiculoAcessorio = $Result.DefaultSelection<Prisma.$VeiculoAcessorioPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Veiculos
 * const veiculos = await prisma.veiculo.findMany()
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
   * // Fetch zero or more Veiculos
   * const veiculos = await prisma.veiculo.findMany()
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
   * `prisma.veiculo`: Exposes CRUD operations for the **Veiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veiculos
    * const veiculos = await prisma.veiculo.findMany()
    * ```
    */
  get veiculo(): Prisma.VeiculoDelegate<ExtArgs>;

  /**
   * `prisma.acessorio`: Exposes CRUD operations for the **Acessorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Acessorios
    * const acessorios = await prisma.acessorio.findMany()
    * ```
    */
  get acessorio(): Prisma.AcessorioDelegate<ExtArgs>;

  /**
   * `prisma.veiculoAcessorio`: Exposes CRUD operations for the **VeiculoAcessorio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VeiculoAcessorios
    * const veiculoAcessorios = await prisma.veiculoAcessorio.findMany()
    * ```
    */
  get veiculoAcessorio(): Prisma.VeiculoAcessorioDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    Veiculo: 'Veiculo',
    Acessorio: 'Acessorio',
    VeiculoAcessorio: 'VeiculoAcessorio'
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
      modelProps: "veiculo" | "acessorio" | "veiculoAcessorio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Veiculo: {
        payload: Prisma.$VeiculoPayload<ExtArgs>
        fields: Prisma.VeiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findFirst: {
            args: Prisma.VeiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          findMany: {
            args: Prisma.VeiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          create: {
            args: Prisma.VeiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          createMany: {
            args: Prisma.VeiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>[]
          }
          delete: {
            args: Prisma.VeiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          update: {
            args: Prisma.VeiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VeiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculo>
          }
          groupBy: {
            args: Prisma.VeiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculoCountAggregateOutputType> | number
          }
        }
      }
      Acessorio: {
        payload: Prisma.$AcessorioPayload<ExtArgs>
        fields: Prisma.AcessorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcessorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcessorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload>
          }
          findFirst: {
            args: Prisma.AcessorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcessorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload>
          }
          findMany: {
            args: Prisma.AcessorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload>[]
          }
          create: {
            args: Prisma.AcessorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload>
          }
          createMany: {
            args: Prisma.AcessorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcessorioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload>[]
          }
          delete: {
            args: Prisma.AcessorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload>
          }
          update: {
            args: Prisma.AcessorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload>
          }
          deleteMany: {
            args: Prisma.AcessorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcessorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcessorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcessorioPayload>
          }
          aggregate: {
            args: Prisma.AcessorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcessorio>
          }
          groupBy: {
            args: Prisma.AcessorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcessorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcessorioCountArgs<ExtArgs>
            result: $Utils.Optional<AcessorioCountAggregateOutputType> | number
          }
        }
      }
      VeiculoAcessorio: {
        payload: Prisma.$VeiculoAcessorioPayload<ExtArgs>
        fields: Prisma.VeiculoAcessorioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeiculoAcessorioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeiculoAcessorioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload>
          }
          findFirst: {
            args: Prisma.VeiculoAcessorioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeiculoAcessorioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload>
          }
          findMany: {
            args: Prisma.VeiculoAcessorioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload>[]
          }
          create: {
            args: Prisma.VeiculoAcessorioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload>
          }
          createMany: {
            args: Prisma.VeiculoAcessorioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeiculoAcessorioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload>[]
          }
          delete: {
            args: Prisma.VeiculoAcessorioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload>
          }
          update: {
            args: Prisma.VeiculoAcessorioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload>
          }
          deleteMany: {
            args: Prisma.VeiculoAcessorioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeiculoAcessorioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VeiculoAcessorioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeiculoAcessorioPayload>
          }
          aggregate: {
            args: Prisma.VeiculoAcessorioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeiculoAcessorio>
          }
          groupBy: {
            args: Prisma.VeiculoAcessorioGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeiculoAcessorioGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeiculoAcessorioCountArgs<ExtArgs>
            result: $Utils.Optional<VeiculoAcessorioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
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
   * Count Type VeiculoCountOutputType
   */

  export type VeiculoCountOutputType = {
    acessorios: number
  }

  export type VeiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acessorios?: boolean | VeiculoCountOutputTypeCountAcessoriosArgs
  }

  // Custom InputTypes
  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoCountOutputType
     */
    select?: VeiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeiculoCountOutputType without action
   */
  export type VeiculoCountOutputTypeCountAcessoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoAcessorioWhereInput
  }


  /**
   * Count Type AcessorioCountOutputType
   */

  export type AcessorioCountOutputType = {
    veiculos: number
  }

  export type AcessorioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculos?: boolean | AcessorioCountOutputTypeCountVeiculosArgs
  }

  // Custom InputTypes
  /**
   * AcessorioCountOutputType without action
   */
  export type AcessorioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessorioCountOutputType
     */
    select?: AcessorioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcessorioCountOutputType without action
   */
  export type AcessorioCountOutputTypeCountVeiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoAcessorioWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Veiculo
   */

  export type AggregateVeiculo = {
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  export type VeiculoAvgAggregateOutputType = {
    id: number | null
    ano: number | null
  }

  export type VeiculoSumAggregateOutputType = {
    id: number | null
    ano: number | null
  }

  export type VeiculoMinAggregateOutputType = {
    id: number | null
    modelo: string | null
    marca: string | null
    ano: number | null
    placa: string | null
  }

  export type VeiculoMaxAggregateOutputType = {
    id: number | null
    modelo: string | null
    marca: string | null
    ano: number | null
    placa: string | null
  }

  export type VeiculoCountAggregateOutputType = {
    id: number
    modelo: number
    marca: number
    ano: number
    placa: number
    _all: number
  }


  export type VeiculoAvgAggregateInputType = {
    id?: true
    ano?: true
  }

  export type VeiculoSumAggregateInputType = {
    id?: true
    ano?: true
  }

  export type VeiculoMinAggregateInputType = {
    id?: true
    modelo?: true
    marca?: true
    ano?: true
    placa?: true
  }

  export type VeiculoMaxAggregateInputType = {
    id?: true
    modelo?: true
    marca?: true
    ano?: true
    placa?: true
  }

  export type VeiculoCountAggregateInputType = {
    id?: true
    modelo?: true
    marca?: true
    ano?: true
    placa?: true
    _all?: true
  }

  export type VeiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculo to aggregate.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veiculos
    **/
    _count?: true | VeiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoMaxAggregateInputType
  }

  export type GetVeiculoAggregateType<T extends VeiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculo[P]>
      : GetScalarType<T[P], AggregateVeiculo[P]>
  }




  export type VeiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoWhereInput
    orderBy?: VeiculoOrderByWithAggregationInput | VeiculoOrderByWithAggregationInput[]
    by: VeiculoScalarFieldEnum[] | VeiculoScalarFieldEnum
    having?: VeiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoCountAggregateInputType | true
    _avg?: VeiculoAvgAggregateInputType
    _sum?: VeiculoSumAggregateInputType
    _min?: VeiculoMinAggregateInputType
    _max?: VeiculoMaxAggregateInputType
  }

  export type VeiculoGroupByOutputType = {
    id: number
    modelo: string
    marca: string
    ano: number
    placa: string
    _count: VeiculoCountAggregateOutputType | null
    _avg: VeiculoAvgAggregateOutputType | null
    _sum: VeiculoSumAggregateOutputType | null
    _min: VeiculoMinAggregateOutputType | null
    _max: VeiculoMaxAggregateOutputType | null
  }

  type GetVeiculoGroupByPayload<T extends VeiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    marca?: boolean
    ano?: boolean
    placa?: boolean
    acessorios?: boolean | Veiculo$acessoriosArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelo?: boolean
    marca?: boolean
    ano?: boolean
    placa?: boolean
  }, ExtArgs["result"]["veiculo"]>

  export type VeiculoSelectScalar = {
    id?: boolean
    modelo?: boolean
    marca?: boolean
    ano?: boolean
    placa?: boolean
  }

  export type VeiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acessorios?: boolean | Veiculo$acessoriosArgs<ExtArgs>
    _count?: boolean | VeiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VeiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veiculo"
    objects: {
      acessorios: Prisma.$VeiculoAcessorioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      modelo: string
      marca: string
      ano: number
      placa: string
    }, ExtArgs["result"]["veiculo"]>
    composites: {}
  }

  type VeiculoGetPayload<S extends boolean | null | undefined | VeiculoDefaultArgs> = $Result.GetResult<Prisma.$VeiculoPayload, S>

  type VeiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VeiculoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VeiculoCountAggregateInputType | true
    }

  export interface VeiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veiculo'], meta: { name: 'Veiculo' } }
    /**
     * Find zero or one Veiculo that matches the filter.
     * @param {VeiculoFindUniqueArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeiculoFindUniqueArgs>(args: SelectSubset<T, VeiculoFindUniqueArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Veiculo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VeiculoFindUniqueOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VeiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Veiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeiculoFindFirstArgs>(args?: SelectSubset<T, VeiculoFindFirstArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Veiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindFirstOrThrowArgs} args - Arguments to find a Veiculo
     * @example
     * // Get one Veiculo
     * const veiculo = await prisma.veiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VeiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Veiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veiculos
     * const veiculos = await prisma.veiculo.findMany()
     * 
     * // Get first 10 Veiculos
     * const veiculos = await prisma.veiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeiculoFindManyArgs>(args?: SelectSubset<T, VeiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Veiculo.
     * @param {VeiculoCreateArgs} args - Arguments to create a Veiculo.
     * @example
     * // Create one Veiculo
     * const Veiculo = await prisma.veiculo.create({
     *   data: {
     *     // ... data to create a Veiculo
     *   }
     * })
     * 
     */
    create<T extends VeiculoCreateArgs>(args: SelectSubset<T, VeiculoCreateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Veiculos.
     * @param {VeiculoCreateManyArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeiculoCreateManyArgs>(args?: SelectSubset<T, VeiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veiculos and returns the data saved in the database.
     * @param {VeiculoCreateManyAndReturnArgs} args - Arguments to create many Veiculos.
     * @example
     * // Create many Veiculos
     * const veiculo = await prisma.veiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veiculos and only return the `id`
     * const veiculoWithIdOnly = await prisma.veiculo.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VeiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Veiculo.
     * @param {VeiculoDeleteArgs} args - Arguments to delete one Veiculo.
     * @example
     * // Delete one Veiculo
     * const Veiculo = await prisma.veiculo.delete({
     *   where: {
     *     // ... filter to delete one Veiculo
     *   }
     * })
     * 
     */
    delete<T extends VeiculoDeleteArgs>(args: SelectSubset<T, VeiculoDeleteArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Veiculo.
     * @param {VeiculoUpdateArgs} args - Arguments to update one Veiculo.
     * @example
     * // Update one Veiculo
     * const veiculo = await prisma.veiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeiculoUpdateArgs>(args: SelectSubset<T, VeiculoUpdateArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Veiculos.
     * @param {VeiculoDeleteManyArgs} args - Arguments to filter Veiculos to delete.
     * @example
     * // Delete a few Veiculos
     * const { count } = await prisma.veiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeiculoDeleteManyArgs>(args?: SelectSubset<T, VeiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veiculos
     * const veiculo = await prisma.veiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeiculoUpdateManyArgs>(args: SelectSubset<T, VeiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Veiculo.
     * @param {VeiculoUpsertArgs} args - Arguments to update or create a Veiculo.
     * @example
     * // Update or create a Veiculo
     * const veiculo = await prisma.veiculo.upsert({
     *   create: {
     *     // ... data to create a Veiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veiculo we want to update
     *   }
     * })
     */
    upsert<T extends VeiculoUpsertArgs>(args: SelectSubset<T, VeiculoUpsertArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Veiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoCountArgs} args - Arguments to filter Veiculos to count.
     * @example
     * // Count the number of Veiculos
     * const count = await prisma.veiculo.count({
     *   where: {
     *     // ... the filter for the Veiculos we want to count
     *   }
     * })
    **/
    count<T extends VeiculoCountArgs>(
      args?: Subset<T, VeiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculoAggregateArgs>(args: Subset<T, VeiculoAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAggregateType<T>>

    /**
     * Group by Veiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoGroupByArgs} args - Group by arguments.
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
      T extends VeiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veiculo model
   */
  readonly fields: VeiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    acessorios<T extends Veiculo$acessoriosArgs<ExtArgs> = {}>(args?: Subset<T, Veiculo$acessoriosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Veiculo model
   */ 
  interface VeiculoFieldRefs {
    readonly id: FieldRef<"Veiculo", 'Int'>
    readonly modelo: FieldRef<"Veiculo", 'String'>
    readonly marca: FieldRef<"Veiculo", 'String'>
    readonly ano: FieldRef<"Veiculo", 'Int'>
    readonly placa: FieldRef<"Veiculo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Veiculo findUnique
   */
  export type VeiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findUniqueOrThrow
   */
  export type VeiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo findFirst
   */
  export type VeiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findFirstOrThrow
   */
  export type VeiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculo to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veiculos.
     */
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo findMany
   */
  export type VeiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter, which Veiculos to fetch.
     */
    where?: VeiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veiculos to fetch.
     */
    orderBy?: VeiculoOrderByWithRelationInput | VeiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veiculos.
     */
    cursor?: VeiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veiculos.
     */
    skip?: number
    distinct?: VeiculoScalarFieldEnum | VeiculoScalarFieldEnum[]
  }

  /**
   * Veiculo create
   */
  export type VeiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Veiculo.
     */
    data: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
  }

  /**
   * Veiculo createMany
   */
  export type VeiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
  }

  /**
   * Veiculo createManyAndReturn
   */
  export type VeiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Veiculos.
     */
    data: VeiculoCreateManyInput | VeiculoCreateManyInput[]
  }

  /**
   * Veiculo update
   */
  export type VeiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Veiculo.
     */
    data: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
    /**
     * Choose, which Veiculo to update.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo updateMany
   */
  export type VeiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veiculos.
     */
    data: XOR<VeiculoUpdateManyMutationInput, VeiculoUncheckedUpdateManyInput>
    /**
     * Filter which Veiculos to update
     */
    where?: VeiculoWhereInput
  }

  /**
   * Veiculo upsert
   */
  export type VeiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Veiculo to update in case it exists.
     */
    where: VeiculoWhereUniqueInput
    /**
     * In case the Veiculo found by the `where` argument doesn't exist, create a new Veiculo with this data.
     */
    create: XOR<VeiculoCreateInput, VeiculoUncheckedCreateInput>
    /**
     * In case the Veiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoUpdateInput, VeiculoUncheckedUpdateInput>
  }

  /**
   * Veiculo delete
   */
  export type VeiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
    /**
     * Filter which Veiculo to delete.
     */
    where: VeiculoWhereUniqueInput
  }

  /**
   * Veiculo deleteMany
   */
  export type VeiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veiculos to delete
     */
    where?: VeiculoWhereInput
  }

  /**
   * Veiculo.acessorios
   */
  export type Veiculo$acessoriosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    where?: VeiculoAcessorioWhereInput
    orderBy?: VeiculoAcessorioOrderByWithRelationInput | VeiculoAcessorioOrderByWithRelationInput[]
    cursor?: VeiculoAcessorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoAcessorioScalarFieldEnum | VeiculoAcessorioScalarFieldEnum[]
  }

  /**
   * Veiculo without action
   */
  export type VeiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veiculo
     */
    select?: VeiculoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoInclude<ExtArgs> | null
  }


  /**
   * Model Acessorio
   */

  export type AggregateAcessorio = {
    _count: AcessorioCountAggregateOutputType | null
    _avg: AcessorioAvgAggregateOutputType | null
    _sum: AcessorioSumAggregateOutputType | null
    _min: AcessorioMinAggregateOutputType | null
    _max: AcessorioMaxAggregateOutputType | null
  }

  export type AcessorioAvgAggregateOutputType = {
    id: number | null
  }

  export type AcessorioSumAggregateOutputType = {
    id: number | null
  }

  export type AcessorioMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type AcessorioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type AcessorioCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type AcessorioAvgAggregateInputType = {
    id?: true
  }

  export type AcessorioSumAggregateInputType = {
    id?: true
  }

  export type AcessorioMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type AcessorioMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type AcessorioCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type AcessorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acessorio to aggregate.
     */
    where?: AcessorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessorios to fetch.
     */
    orderBy?: AcessorioOrderByWithRelationInput | AcessorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcessorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Acessorios
    **/
    _count?: true | AcessorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcessorioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcessorioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcessorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcessorioMaxAggregateInputType
  }

  export type GetAcessorioAggregateType<T extends AcessorioAggregateArgs> = {
        [P in keyof T & keyof AggregateAcessorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcessorio[P]>
      : GetScalarType<T[P], AggregateAcessorio[P]>
  }




  export type AcessorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcessorioWhereInput
    orderBy?: AcessorioOrderByWithAggregationInput | AcessorioOrderByWithAggregationInput[]
    by: AcessorioScalarFieldEnum[] | AcessorioScalarFieldEnum
    having?: AcessorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcessorioCountAggregateInputType | true
    _avg?: AcessorioAvgAggregateInputType
    _sum?: AcessorioSumAggregateInputType
    _min?: AcessorioMinAggregateInputType
    _max?: AcessorioMaxAggregateInputType
  }

  export type AcessorioGroupByOutputType = {
    id: number
    nome: string
    _count: AcessorioCountAggregateOutputType | null
    _avg: AcessorioAvgAggregateOutputType | null
    _sum: AcessorioSumAggregateOutputType | null
    _min: AcessorioMinAggregateOutputType | null
    _max: AcessorioMaxAggregateOutputType | null
  }

  type GetAcessorioGroupByPayload<T extends AcessorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcessorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcessorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcessorioGroupByOutputType[P]>
            : GetScalarType<T[P], AcessorioGroupByOutputType[P]>
        }
      >
    >


  export type AcessorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    veiculos?: boolean | Acessorio$veiculosArgs<ExtArgs>
    _count?: boolean | AcessorioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acessorio"]>

  export type AcessorioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["acessorio"]>

  export type AcessorioSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type AcessorioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculos?: boolean | Acessorio$veiculosArgs<ExtArgs>
    _count?: boolean | AcessorioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AcessorioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AcessorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Acessorio"
    objects: {
      veiculos: Prisma.$VeiculoAcessorioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["acessorio"]>
    composites: {}
  }

  type AcessorioGetPayload<S extends boolean | null | undefined | AcessorioDefaultArgs> = $Result.GetResult<Prisma.$AcessorioPayload, S>

  type AcessorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AcessorioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AcessorioCountAggregateInputType | true
    }

  export interface AcessorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acessorio'], meta: { name: 'Acessorio' } }
    /**
     * Find zero or one Acessorio that matches the filter.
     * @param {AcessorioFindUniqueArgs} args - Arguments to find a Acessorio
     * @example
     * // Get one Acessorio
     * const acessorio = await prisma.acessorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcessorioFindUniqueArgs>(args: SelectSubset<T, AcessorioFindUniqueArgs<ExtArgs>>): Prisma__AcessorioClient<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Acessorio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AcessorioFindUniqueOrThrowArgs} args - Arguments to find a Acessorio
     * @example
     * // Get one Acessorio
     * const acessorio = await prisma.acessorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcessorioFindUniqueOrThrowArgs>(args: SelectSubset<T, AcessorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcessorioClient<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Acessorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessorioFindFirstArgs} args - Arguments to find a Acessorio
     * @example
     * // Get one Acessorio
     * const acessorio = await prisma.acessorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcessorioFindFirstArgs>(args?: SelectSubset<T, AcessorioFindFirstArgs<ExtArgs>>): Prisma__AcessorioClient<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Acessorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessorioFindFirstOrThrowArgs} args - Arguments to find a Acessorio
     * @example
     * // Get one Acessorio
     * const acessorio = await prisma.acessorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcessorioFindFirstOrThrowArgs>(args?: SelectSubset<T, AcessorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcessorioClient<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Acessorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acessorios
     * const acessorios = await prisma.acessorio.findMany()
     * 
     * // Get first 10 Acessorios
     * const acessorios = await prisma.acessorio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acessorioWithIdOnly = await prisma.acessorio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcessorioFindManyArgs>(args?: SelectSubset<T, AcessorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Acessorio.
     * @param {AcessorioCreateArgs} args - Arguments to create a Acessorio.
     * @example
     * // Create one Acessorio
     * const Acessorio = await prisma.acessorio.create({
     *   data: {
     *     // ... data to create a Acessorio
     *   }
     * })
     * 
     */
    create<T extends AcessorioCreateArgs>(args: SelectSubset<T, AcessorioCreateArgs<ExtArgs>>): Prisma__AcessorioClient<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Acessorios.
     * @param {AcessorioCreateManyArgs} args - Arguments to create many Acessorios.
     * @example
     * // Create many Acessorios
     * const acessorio = await prisma.acessorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcessorioCreateManyArgs>(args?: SelectSubset<T, AcessorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Acessorios and returns the data saved in the database.
     * @param {AcessorioCreateManyAndReturnArgs} args - Arguments to create many Acessorios.
     * @example
     * // Create many Acessorios
     * const acessorio = await prisma.acessorio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Acessorios and only return the `id`
     * const acessorioWithIdOnly = await prisma.acessorio.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcessorioCreateManyAndReturnArgs>(args?: SelectSubset<T, AcessorioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Acessorio.
     * @param {AcessorioDeleteArgs} args - Arguments to delete one Acessorio.
     * @example
     * // Delete one Acessorio
     * const Acessorio = await prisma.acessorio.delete({
     *   where: {
     *     // ... filter to delete one Acessorio
     *   }
     * })
     * 
     */
    delete<T extends AcessorioDeleteArgs>(args: SelectSubset<T, AcessorioDeleteArgs<ExtArgs>>): Prisma__AcessorioClient<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Acessorio.
     * @param {AcessorioUpdateArgs} args - Arguments to update one Acessorio.
     * @example
     * // Update one Acessorio
     * const acessorio = await prisma.acessorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcessorioUpdateArgs>(args: SelectSubset<T, AcessorioUpdateArgs<ExtArgs>>): Prisma__AcessorioClient<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Acessorios.
     * @param {AcessorioDeleteManyArgs} args - Arguments to filter Acessorios to delete.
     * @example
     * // Delete a few Acessorios
     * const { count } = await prisma.acessorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcessorioDeleteManyArgs>(args?: SelectSubset<T, AcessorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acessorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acessorios
     * const acessorio = await prisma.acessorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcessorioUpdateManyArgs>(args: SelectSubset<T, AcessorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Acessorio.
     * @param {AcessorioUpsertArgs} args - Arguments to update or create a Acessorio.
     * @example
     * // Update or create a Acessorio
     * const acessorio = await prisma.acessorio.upsert({
     *   create: {
     *     // ... data to create a Acessorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acessorio we want to update
     *   }
     * })
     */
    upsert<T extends AcessorioUpsertArgs>(args: SelectSubset<T, AcessorioUpsertArgs<ExtArgs>>): Prisma__AcessorioClient<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Acessorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessorioCountArgs} args - Arguments to filter Acessorios to count.
     * @example
     * // Count the number of Acessorios
     * const count = await prisma.acessorio.count({
     *   where: {
     *     // ... the filter for the Acessorios we want to count
     *   }
     * })
    **/
    count<T extends AcessorioCountArgs>(
      args?: Subset<T, AcessorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcessorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acessorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcessorioAggregateArgs>(args: Subset<T, AcessorioAggregateArgs>): Prisma.PrismaPromise<GetAcessorioAggregateType<T>>

    /**
     * Group by Acessorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessorioGroupByArgs} args - Group by arguments.
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
      T extends AcessorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcessorioGroupByArgs['orderBy'] }
        : { orderBy?: AcessorioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcessorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcessorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Acessorio model
   */
  readonly fields: AcessorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Acessorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcessorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veiculos<T extends Acessorio$veiculosArgs<ExtArgs> = {}>(args?: Subset<T, Acessorio$veiculosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Acessorio model
   */ 
  interface AcessorioFieldRefs {
    readonly id: FieldRef<"Acessorio", 'Int'>
    readonly nome: FieldRef<"Acessorio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Acessorio findUnique
   */
  export type AcessorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
    /**
     * Filter, which Acessorio to fetch.
     */
    where: AcessorioWhereUniqueInput
  }

  /**
   * Acessorio findUniqueOrThrow
   */
  export type AcessorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
    /**
     * Filter, which Acessorio to fetch.
     */
    where: AcessorioWhereUniqueInput
  }

  /**
   * Acessorio findFirst
   */
  export type AcessorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
    /**
     * Filter, which Acessorio to fetch.
     */
    where?: AcessorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessorios to fetch.
     */
    orderBy?: AcessorioOrderByWithRelationInput | AcessorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acessorios.
     */
    cursor?: AcessorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acessorios.
     */
    distinct?: AcessorioScalarFieldEnum | AcessorioScalarFieldEnum[]
  }

  /**
   * Acessorio findFirstOrThrow
   */
  export type AcessorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
    /**
     * Filter, which Acessorio to fetch.
     */
    where?: AcessorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessorios to fetch.
     */
    orderBy?: AcessorioOrderByWithRelationInput | AcessorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acessorios.
     */
    cursor?: AcessorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acessorios.
     */
    distinct?: AcessorioScalarFieldEnum | AcessorioScalarFieldEnum[]
  }

  /**
   * Acessorio findMany
   */
  export type AcessorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
    /**
     * Filter, which Acessorios to fetch.
     */
    where?: AcessorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessorios to fetch.
     */
    orderBy?: AcessorioOrderByWithRelationInput | AcessorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Acessorios.
     */
    cursor?: AcessorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessorios.
     */
    skip?: number
    distinct?: AcessorioScalarFieldEnum | AcessorioScalarFieldEnum[]
  }

  /**
   * Acessorio create
   */
  export type AcessorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
    /**
     * The data needed to create a Acessorio.
     */
    data: XOR<AcessorioCreateInput, AcessorioUncheckedCreateInput>
  }

  /**
   * Acessorio createMany
   */
  export type AcessorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Acessorios.
     */
    data: AcessorioCreateManyInput | AcessorioCreateManyInput[]
  }

  /**
   * Acessorio createManyAndReturn
   */
  export type AcessorioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Acessorios.
     */
    data: AcessorioCreateManyInput | AcessorioCreateManyInput[]
  }

  /**
   * Acessorio update
   */
  export type AcessorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
    /**
     * The data needed to update a Acessorio.
     */
    data: XOR<AcessorioUpdateInput, AcessorioUncheckedUpdateInput>
    /**
     * Choose, which Acessorio to update.
     */
    where: AcessorioWhereUniqueInput
  }

  /**
   * Acessorio updateMany
   */
  export type AcessorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Acessorios.
     */
    data: XOR<AcessorioUpdateManyMutationInput, AcessorioUncheckedUpdateManyInput>
    /**
     * Filter which Acessorios to update
     */
    where?: AcessorioWhereInput
  }

  /**
   * Acessorio upsert
   */
  export type AcessorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
    /**
     * The filter to search for the Acessorio to update in case it exists.
     */
    where: AcessorioWhereUniqueInput
    /**
     * In case the Acessorio found by the `where` argument doesn't exist, create a new Acessorio with this data.
     */
    create: XOR<AcessorioCreateInput, AcessorioUncheckedCreateInput>
    /**
     * In case the Acessorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcessorioUpdateInput, AcessorioUncheckedUpdateInput>
  }

  /**
   * Acessorio delete
   */
  export type AcessorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
    /**
     * Filter which Acessorio to delete.
     */
    where: AcessorioWhereUniqueInput
  }

  /**
   * Acessorio deleteMany
   */
  export type AcessorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acessorios to delete
     */
    where?: AcessorioWhereInput
  }

  /**
   * Acessorio.veiculos
   */
  export type Acessorio$veiculosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    where?: VeiculoAcessorioWhereInput
    orderBy?: VeiculoAcessorioOrderByWithRelationInput | VeiculoAcessorioOrderByWithRelationInput[]
    cursor?: VeiculoAcessorioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VeiculoAcessorioScalarFieldEnum | VeiculoAcessorioScalarFieldEnum[]
  }

  /**
   * Acessorio without action
   */
  export type AcessorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acessorio
     */
    select?: AcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcessorioInclude<ExtArgs> | null
  }


  /**
   * Model VeiculoAcessorio
   */

  export type AggregateVeiculoAcessorio = {
    _count: VeiculoAcessorioCountAggregateOutputType | null
    _avg: VeiculoAcessorioAvgAggregateOutputType | null
    _sum: VeiculoAcessorioSumAggregateOutputType | null
    _min: VeiculoAcessorioMinAggregateOutputType | null
    _max: VeiculoAcessorioMaxAggregateOutputType | null
  }

  export type VeiculoAcessorioAvgAggregateOutputType = {
    veiculoId: number | null
    acessorioId: number | null
  }

  export type VeiculoAcessorioSumAggregateOutputType = {
    veiculoId: number | null
    acessorioId: number | null
  }

  export type VeiculoAcessorioMinAggregateOutputType = {
    veiculoId: number | null
    acessorioId: number | null
    descricao: string | null
  }

  export type VeiculoAcessorioMaxAggregateOutputType = {
    veiculoId: number | null
    acessorioId: number | null
    descricao: string | null
  }

  export type VeiculoAcessorioCountAggregateOutputType = {
    veiculoId: number
    acessorioId: number
    descricao: number
    _all: number
  }


  export type VeiculoAcessorioAvgAggregateInputType = {
    veiculoId?: true
    acessorioId?: true
  }

  export type VeiculoAcessorioSumAggregateInputType = {
    veiculoId?: true
    acessorioId?: true
  }

  export type VeiculoAcessorioMinAggregateInputType = {
    veiculoId?: true
    acessorioId?: true
    descricao?: true
  }

  export type VeiculoAcessorioMaxAggregateInputType = {
    veiculoId?: true
    acessorioId?: true
    descricao?: true
  }

  export type VeiculoAcessorioCountAggregateInputType = {
    veiculoId?: true
    acessorioId?: true
    descricao?: true
    _all?: true
  }

  export type VeiculoAcessorioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoAcessorio to aggregate.
     */
    where?: VeiculoAcessorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoAcessorios to fetch.
     */
    orderBy?: VeiculoAcessorioOrderByWithRelationInput | VeiculoAcessorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeiculoAcessorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoAcessorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoAcessorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VeiculoAcessorios
    **/
    _count?: true | VeiculoAcessorioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeiculoAcessorioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeiculoAcessorioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeiculoAcessorioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeiculoAcessorioMaxAggregateInputType
  }

  export type GetVeiculoAcessorioAggregateType<T extends VeiculoAcessorioAggregateArgs> = {
        [P in keyof T & keyof AggregateVeiculoAcessorio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeiculoAcessorio[P]>
      : GetScalarType<T[P], AggregateVeiculoAcessorio[P]>
  }




  export type VeiculoAcessorioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeiculoAcessorioWhereInput
    orderBy?: VeiculoAcessorioOrderByWithAggregationInput | VeiculoAcessorioOrderByWithAggregationInput[]
    by: VeiculoAcessorioScalarFieldEnum[] | VeiculoAcessorioScalarFieldEnum
    having?: VeiculoAcessorioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeiculoAcessorioCountAggregateInputType | true
    _avg?: VeiculoAcessorioAvgAggregateInputType
    _sum?: VeiculoAcessorioSumAggregateInputType
    _min?: VeiculoAcessorioMinAggregateInputType
    _max?: VeiculoAcessorioMaxAggregateInputType
  }

  export type VeiculoAcessorioGroupByOutputType = {
    veiculoId: number
    acessorioId: number
    descricao: string | null
    _count: VeiculoAcessorioCountAggregateOutputType | null
    _avg: VeiculoAcessorioAvgAggregateOutputType | null
    _sum: VeiculoAcessorioSumAggregateOutputType | null
    _min: VeiculoAcessorioMinAggregateOutputType | null
    _max: VeiculoAcessorioMaxAggregateOutputType | null
  }

  type GetVeiculoAcessorioGroupByPayload<T extends VeiculoAcessorioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeiculoAcessorioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeiculoAcessorioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeiculoAcessorioGroupByOutputType[P]>
            : GetScalarType<T[P], VeiculoAcessorioGroupByOutputType[P]>
        }
      >
    >


  export type VeiculoAcessorioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    veiculoId?: boolean
    acessorioId?: boolean
    descricao?: boolean
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    acessorio?: boolean | AcessorioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculoAcessorio"]>

  export type VeiculoAcessorioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    veiculoId?: boolean
    acessorioId?: boolean
    descricao?: boolean
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    acessorio?: boolean | AcessorioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veiculoAcessorio"]>

  export type VeiculoAcessorioSelectScalar = {
    veiculoId?: boolean
    acessorioId?: boolean
    descricao?: boolean
  }

  export type VeiculoAcessorioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    acessorio?: boolean | AcessorioDefaultArgs<ExtArgs>
  }
  export type VeiculoAcessorioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    veiculo?: boolean | VeiculoDefaultArgs<ExtArgs>
    acessorio?: boolean | AcessorioDefaultArgs<ExtArgs>
  }

  export type $VeiculoAcessorioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VeiculoAcessorio"
    objects: {
      veiculo: Prisma.$VeiculoPayload<ExtArgs>
      acessorio: Prisma.$AcessorioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      veiculoId: number
      acessorioId: number
      descricao: string | null
    }, ExtArgs["result"]["veiculoAcessorio"]>
    composites: {}
  }

  type VeiculoAcessorioGetPayload<S extends boolean | null | undefined | VeiculoAcessorioDefaultArgs> = $Result.GetResult<Prisma.$VeiculoAcessorioPayload, S>

  type VeiculoAcessorioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VeiculoAcessorioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VeiculoAcessorioCountAggregateInputType | true
    }

  export interface VeiculoAcessorioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VeiculoAcessorio'], meta: { name: 'VeiculoAcessorio' } }
    /**
     * Find zero or one VeiculoAcessorio that matches the filter.
     * @param {VeiculoAcessorioFindUniqueArgs} args - Arguments to find a VeiculoAcessorio
     * @example
     * // Get one VeiculoAcessorio
     * const veiculoAcessorio = await prisma.veiculoAcessorio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeiculoAcessorioFindUniqueArgs>(args: SelectSubset<T, VeiculoAcessorioFindUniqueArgs<ExtArgs>>): Prisma__VeiculoAcessorioClient<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one VeiculoAcessorio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VeiculoAcessorioFindUniqueOrThrowArgs} args - Arguments to find a VeiculoAcessorio
     * @example
     * // Get one VeiculoAcessorio
     * const veiculoAcessorio = await prisma.veiculoAcessorio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeiculoAcessorioFindUniqueOrThrowArgs>(args: SelectSubset<T, VeiculoAcessorioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeiculoAcessorioClient<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first VeiculoAcessorio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAcessorioFindFirstArgs} args - Arguments to find a VeiculoAcessorio
     * @example
     * // Get one VeiculoAcessorio
     * const veiculoAcessorio = await prisma.veiculoAcessorio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeiculoAcessorioFindFirstArgs>(args?: SelectSubset<T, VeiculoAcessorioFindFirstArgs<ExtArgs>>): Prisma__VeiculoAcessorioClient<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first VeiculoAcessorio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAcessorioFindFirstOrThrowArgs} args - Arguments to find a VeiculoAcessorio
     * @example
     * // Get one VeiculoAcessorio
     * const veiculoAcessorio = await prisma.veiculoAcessorio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeiculoAcessorioFindFirstOrThrowArgs>(args?: SelectSubset<T, VeiculoAcessorioFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeiculoAcessorioClient<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more VeiculoAcessorios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAcessorioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VeiculoAcessorios
     * const veiculoAcessorios = await prisma.veiculoAcessorio.findMany()
     * 
     * // Get first 10 VeiculoAcessorios
     * const veiculoAcessorios = await prisma.veiculoAcessorio.findMany({ take: 10 })
     * 
     * // Only select the `veiculoId`
     * const veiculoAcessorioWithVeiculoIdOnly = await prisma.veiculoAcessorio.findMany({ select: { veiculoId: true } })
     * 
     */
    findMany<T extends VeiculoAcessorioFindManyArgs>(args?: SelectSubset<T, VeiculoAcessorioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a VeiculoAcessorio.
     * @param {VeiculoAcessorioCreateArgs} args - Arguments to create a VeiculoAcessorio.
     * @example
     * // Create one VeiculoAcessorio
     * const VeiculoAcessorio = await prisma.veiculoAcessorio.create({
     *   data: {
     *     // ... data to create a VeiculoAcessorio
     *   }
     * })
     * 
     */
    create<T extends VeiculoAcessorioCreateArgs>(args: SelectSubset<T, VeiculoAcessorioCreateArgs<ExtArgs>>): Prisma__VeiculoAcessorioClient<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many VeiculoAcessorios.
     * @param {VeiculoAcessorioCreateManyArgs} args - Arguments to create many VeiculoAcessorios.
     * @example
     * // Create many VeiculoAcessorios
     * const veiculoAcessorio = await prisma.veiculoAcessorio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeiculoAcessorioCreateManyArgs>(args?: SelectSubset<T, VeiculoAcessorioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VeiculoAcessorios and returns the data saved in the database.
     * @param {VeiculoAcessorioCreateManyAndReturnArgs} args - Arguments to create many VeiculoAcessorios.
     * @example
     * // Create many VeiculoAcessorios
     * const veiculoAcessorio = await prisma.veiculoAcessorio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VeiculoAcessorios and only return the `veiculoId`
     * const veiculoAcessorioWithVeiculoIdOnly = await prisma.veiculoAcessorio.createManyAndReturn({ 
     *   select: { veiculoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeiculoAcessorioCreateManyAndReturnArgs>(args?: SelectSubset<T, VeiculoAcessorioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a VeiculoAcessorio.
     * @param {VeiculoAcessorioDeleteArgs} args - Arguments to delete one VeiculoAcessorio.
     * @example
     * // Delete one VeiculoAcessorio
     * const VeiculoAcessorio = await prisma.veiculoAcessorio.delete({
     *   where: {
     *     // ... filter to delete one VeiculoAcessorio
     *   }
     * })
     * 
     */
    delete<T extends VeiculoAcessorioDeleteArgs>(args: SelectSubset<T, VeiculoAcessorioDeleteArgs<ExtArgs>>): Prisma__VeiculoAcessorioClient<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one VeiculoAcessorio.
     * @param {VeiculoAcessorioUpdateArgs} args - Arguments to update one VeiculoAcessorio.
     * @example
     * // Update one VeiculoAcessorio
     * const veiculoAcessorio = await prisma.veiculoAcessorio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeiculoAcessorioUpdateArgs>(args: SelectSubset<T, VeiculoAcessorioUpdateArgs<ExtArgs>>): Prisma__VeiculoAcessorioClient<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more VeiculoAcessorios.
     * @param {VeiculoAcessorioDeleteManyArgs} args - Arguments to filter VeiculoAcessorios to delete.
     * @example
     * // Delete a few VeiculoAcessorios
     * const { count } = await prisma.veiculoAcessorio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeiculoAcessorioDeleteManyArgs>(args?: SelectSubset<T, VeiculoAcessorioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VeiculoAcessorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAcessorioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VeiculoAcessorios
     * const veiculoAcessorio = await prisma.veiculoAcessorio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeiculoAcessorioUpdateManyArgs>(args: SelectSubset<T, VeiculoAcessorioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VeiculoAcessorio.
     * @param {VeiculoAcessorioUpsertArgs} args - Arguments to update or create a VeiculoAcessorio.
     * @example
     * // Update or create a VeiculoAcessorio
     * const veiculoAcessorio = await prisma.veiculoAcessorio.upsert({
     *   create: {
     *     // ... data to create a VeiculoAcessorio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VeiculoAcessorio we want to update
     *   }
     * })
     */
    upsert<T extends VeiculoAcessorioUpsertArgs>(args: SelectSubset<T, VeiculoAcessorioUpsertArgs<ExtArgs>>): Prisma__VeiculoAcessorioClient<$Result.GetResult<Prisma.$VeiculoAcessorioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of VeiculoAcessorios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAcessorioCountArgs} args - Arguments to filter VeiculoAcessorios to count.
     * @example
     * // Count the number of VeiculoAcessorios
     * const count = await prisma.veiculoAcessorio.count({
     *   where: {
     *     // ... the filter for the VeiculoAcessorios we want to count
     *   }
     * })
    **/
    count<T extends VeiculoAcessorioCountArgs>(
      args?: Subset<T, VeiculoAcessorioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeiculoAcessorioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VeiculoAcessorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAcessorioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeiculoAcessorioAggregateArgs>(args: Subset<T, VeiculoAcessorioAggregateArgs>): Prisma.PrismaPromise<GetVeiculoAcessorioAggregateType<T>>

    /**
     * Group by VeiculoAcessorio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeiculoAcessorioGroupByArgs} args - Group by arguments.
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
      T extends VeiculoAcessorioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeiculoAcessorioGroupByArgs['orderBy'] }
        : { orderBy?: VeiculoAcessorioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeiculoAcessorioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeiculoAcessorioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VeiculoAcessorio model
   */
  readonly fields: VeiculoAcessorioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VeiculoAcessorio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeiculoAcessorioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    veiculo<T extends VeiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeiculoDefaultArgs<ExtArgs>>): Prisma__VeiculoClient<$Result.GetResult<Prisma.$VeiculoPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    acessorio<T extends AcessorioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcessorioDefaultArgs<ExtArgs>>): Prisma__AcessorioClient<$Result.GetResult<Prisma.$AcessorioPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the VeiculoAcessorio model
   */ 
  interface VeiculoAcessorioFieldRefs {
    readonly veiculoId: FieldRef<"VeiculoAcessorio", 'Int'>
    readonly acessorioId: FieldRef<"VeiculoAcessorio", 'Int'>
    readonly descricao: FieldRef<"VeiculoAcessorio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VeiculoAcessorio findUnique
   */
  export type VeiculoAcessorioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAcessorio to fetch.
     */
    where: VeiculoAcessorioWhereUniqueInput
  }

  /**
   * VeiculoAcessorio findUniqueOrThrow
   */
  export type VeiculoAcessorioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAcessorio to fetch.
     */
    where: VeiculoAcessorioWhereUniqueInput
  }

  /**
   * VeiculoAcessorio findFirst
   */
  export type VeiculoAcessorioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAcessorio to fetch.
     */
    where?: VeiculoAcessorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoAcessorios to fetch.
     */
    orderBy?: VeiculoAcessorioOrderByWithRelationInput | VeiculoAcessorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoAcessorios.
     */
    cursor?: VeiculoAcessorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoAcessorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoAcessorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoAcessorios.
     */
    distinct?: VeiculoAcessorioScalarFieldEnum | VeiculoAcessorioScalarFieldEnum[]
  }

  /**
   * VeiculoAcessorio findFirstOrThrow
   */
  export type VeiculoAcessorioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAcessorio to fetch.
     */
    where?: VeiculoAcessorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoAcessorios to fetch.
     */
    orderBy?: VeiculoAcessorioOrderByWithRelationInput | VeiculoAcessorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VeiculoAcessorios.
     */
    cursor?: VeiculoAcessorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoAcessorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoAcessorios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VeiculoAcessorios.
     */
    distinct?: VeiculoAcessorioScalarFieldEnum | VeiculoAcessorioScalarFieldEnum[]
  }

  /**
   * VeiculoAcessorio findMany
   */
  export type VeiculoAcessorioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    /**
     * Filter, which VeiculoAcessorios to fetch.
     */
    where?: VeiculoAcessorioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VeiculoAcessorios to fetch.
     */
    orderBy?: VeiculoAcessorioOrderByWithRelationInput | VeiculoAcessorioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VeiculoAcessorios.
     */
    cursor?: VeiculoAcessorioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VeiculoAcessorios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VeiculoAcessorios.
     */
    skip?: number
    distinct?: VeiculoAcessorioScalarFieldEnum | VeiculoAcessorioScalarFieldEnum[]
  }

  /**
   * VeiculoAcessorio create
   */
  export type VeiculoAcessorioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    /**
     * The data needed to create a VeiculoAcessorio.
     */
    data: XOR<VeiculoAcessorioCreateInput, VeiculoAcessorioUncheckedCreateInput>
  }

  /**
   * VeiculoAcessorio createMany
   */
  export type VeiculoAcessorioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VeiculoAcessorios.
     */
    data: VeiculoAcessorioCreateManyInput | VeiculoAcessorioCreateManyInput[]
  }

  /**
   * VeiculoAcessorio createManyAndReturn
   */
  export type VeiculoAcessorioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many VeiculoAcessorios.
     */
    data: VeiculoAcessorioCreateManyInput | VeiculoAcessorioCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VeiculoAcessorio update
   */
  export type VeiculoAcessorioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    /**
     * The data needed to update a VeiculoAcessorio.
     */
    data: XOR<VeiculoAcessorioUpdateInput, VeiculoAcessorioUncheckedUpdateInput>
    /**
     * Choose, which VeiculoAcessorio to update.
     */
    where: VeiculoAcessorioWhereUniqueInput
  }

  /**
   * VeiculoAcessorio updateMany
   */
  export type VeiculoAcessorioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VeiculoAcessorios.
     */
    data: XOR<VeiculoAcessorioUpdateManyMutationInput, VeiculoAcessorioUncheckedUpdateManyInput>
    /**
     * Filter which VeiculoAcessorios to update
     */
    where?: VeiculoAcessorioWhereInput
  }

  /**
   * VeiculoAcessorio upsert
   */
  export type VeiculoAcessorioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    /**
     * The filter to search for the VeiculoAcessorio to update in case it exists.
     */
    where: VeiculoAcessorioWhereUniqueInput
    /**
     * In case the VeiculoAcessorio found by the `where` argument doesn't exist, create a new VeiculoAcessorio with this data.
     */
    create: XOR<VeiculoAcessorioCreateInput, VeiculoAcessorioUncheckedCreateInput>
    /**
     * In case the VeiculoAcessorio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeiculoAcessorioUpdateInput, VeiculoAcessorioUncheckedUpdateInput>
  }

  /**
   * VeiculoAcessorio delete
   */
  export type VeiculoAcessorioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
    /**
     * Filter which VeiculoAcessorio to delete.
     */
    where: VeiculoAcessorioWhereUniqueInput
  }

  /**
   * VeiculoAcessorio deleteMany
   */
  export type VeiculoAcessorioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VeiculoAcessorios to delete
     */
    where?: VeiculoAcessorioWhereInput
  }

  /**
   * VeiculoAcessorio without action
   */
  export type VeiculoAcessorioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeiculoAcessorio
     */
    select?: VeiculoAcessorioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeiculoAcessorioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VeiculoScalarFieldEnum: {
    id: 'id',
    modelo: 'modelo',
    marca: 'marca',
    ano: 'ano',
    placa: 'placa'
  };

  export type VeiculoScalarFieldEnum = (typeof VeiculoScalarFieldEnum)[keyof typeof VeiculoScalarFieldEnum]


  export const AcessorioScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type AcessorioScalarFieldEnum = (typeof AcessorioScalarFieldEnum)[keyof typeof AcessorioScalarFieldEnum]


  export const VeiculoAcessorioScalarFieldEnum: {
    veiculoId: 'veiculoId',
    acessorioId: 'acessorioId',
    descricao: 'descricao'
  };

  export type VeiculoAcessorioScalarFieldEnum = (typeof VeiculoAcessorioScalarFieldEnum)[keyof typeof VeiculoAcessorioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type VeiculoWhereInput = {
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    id?: IntFilter<"Veiculo"> | number
    modelo?: StringFilter<"Veiculo"> | string
    marca?: StringFilter<"Veiculo"> | string
    ano?: IntFilter<"Veiculo"> | number
    placa?: StringFilter<"Veiculo"> | string
    acessorios?: VeiculoAcessorioListRelationFilter
  }

  export type VeiculoOrderByWithRelationInput = {
    id?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
    acessorios?: VeiculoAcessorioOrderByRelationAggregateInput
  }

  export type VeiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VeiculoWhereInput | VeiculoWhereInput[]
    OR?: VeiculoWhereInput[]
    NOT?: VeiculoWhereInput | VeiculoWhereInput[]
    modelo?: StringFilter<"Veiculo"> | string
    marca?: StringFilter<"Veiculo"> | string
    ano?: IntFilter<"Veiculo"> | number
    placa?: StringFilter<"Veiculo"> | string
    acessorios?: VeiculoAcessorioListRelationFilter
  }, "id">

  export type VeiculoOrderByWithAggregationInput = {
    id?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
    _count?: VeiculoCountOrderByAggregateInput
    _avg?: VeiculoAvgOrderByAggregateInput
    _max?: VeiculoMaxOrderByAggregateInput
    _min?: VeiculoMinOrderByAggregateInput
    _sum?: VeiculoSumOrderByAggregateInput
  }

  export type VeiculoScalarWhereWithAggregatesInput = {
    AND?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    OR?: VeiculoScalarWhereWithAggregatesInput[]
    NOT?: VeiculoScalarWhereWithAggregatesInput | VeiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Veiculo"> | number
    modelo?: StringWithAggregatesFilter<"Veiculo"> | string
    marca?: StringWithAggregatesFilter<"Veiculo"> | string
    ano?: IntWithAggregatesFilter<"Veiculo"> | number
    placa?: StringWithAggregatesFilter<"Veiculo"> | string
  }

  export type AcessorioWhereInput = {
    AND?: AcessorioWhereInput | AcessorioWhereInput[]
    OR?: AcessorioWhereInput[]
    NOT?: AcessorioWhereInput | AcessorioWhereInput[]
    id?: IntFilter<"Acessorio"> | number
    nome?: StringFilter<"Acessorio"> | string
    veiculos?: VeiculoAcessorioListRelationFilter
  }

  export type AcessorioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    veiculos?: VeiculoAcessorioOrderByRelationAggregateInput
  }

  export type AcessorioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AcessorioWhereInput | AcessorioWhereInput[]
    OR?: AcessorioWhereInput[]
    NOT?: AcessorioWhereInput | AcessorioWhereInput[]
    nome?: StringFilter<"Acessorio"> | string
    veiculos?: VeiculoAcessorioListRelationFilter
  }, "id">

  export type AcessorioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: AcessorioCountOrderByAggregateInput
    _avg?: AcessorioAvgOrderByAggregateInput
    _max?: AcessorioMaxOrderByAggregateInput
    _min?: AcessorioMinOrderByAggregateInput
    _sum?: AcessorioSumOrderByAggregateInput
  }

  export type AcessorioScalarWhereWithAggregatesInput = {
    AND?: AcessorioScalarWhereWithAggregatesInput | AcessorioScalarWhereWithAggregatesInput[]
    OR?: AcessorioScalarWhereWithAggregatesInput[]
    NOT?: AcessorioScalarWhereWithAggregatesInput | AcessorioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Acessorio"> | number
    nome?: StringWithAggregatesFilter<"Acessorio"> | string
  }

  export type VeiculoAcessorioWhereInput = {
    AND?: VeiculoAcessorioWhereInput | VeiculoAcessorioWhereInput[]
    OR?: VeiculoAcessorioWhereInput[]
    NOT?: VeiculoAcessorioWhereInput | VeiculoAcessorioWhereInput[]
    veiculoId?: IntFilter<"VeiculoAcessorio"> | number
    acessorioId?: IntFilter<"VeiculoAcessorio"> | number
    descricao?: StringNullableFilter<"VeiculoAcessorio"> | string | null
    veiculo?: XOR<VeiculoRelationFilter, VeiculoWhereInput>
    acessorio?: XOR<AcessorioRelationFilter, AcessorioWhereInput>
  }

  export type VeiculoAcessorioOrderByWithRelationInput = {
    veiculoId?: SortOrder
    acessorioId?: SortOrder
    descricao?: SortOrderInput | SortOrder
    veiculo?: VeiculoOrderByWithRelationInput
    acessorio?: AcessorioOrderByWithRelationInput
  }

  export type VeiculoAcessorioWhereUniqueInput = Prisma.AtLeast<{
    veiculoId_acessorioId?: VeiculoAcessorioVeiculoIdAcessorioIdCompoundUniqueInput
    AND?: VeiculoAcessorioWhereInput | VeiculoAcessorioWhereInput[]
    OR?: VeiculoAcessorioWhereInput[]
    NOT?: VeiculoAcessorioWhereInput | VeiculoAcessorioWhereInput[]
    veiculoId?: IntFilter<"VeiculoAcessorio"> | number
    acessorioId?: IntFilter<"VeiculoAcessorio"> | number
    descricao?: StringNullableFilter<"VeiculoAcessorio"> | string | null
    veiculo?: XOR<VeiculoRelationFilter, VeiculoWhereInput>
    acessorio?: XOR<AcessorioRelationFilter, AcessorioWhereInput>
  }, "veiculoId_acessorioId">

  export type VeiculoAcessorioOrderByWithAggregationInput = {
    veiculoId?: SortOrder
    acessorioId?: SortOrder
    descricao?: SortOrderInput | SortOrder
    _count?: VeiculoAcessorioCountOrderByAggregateInput
    _avg?: VeiculoAcessorioAvgOrderByAggregateInput
    _max?: VeiculoAcessorioMaxOrderByAggregateInput
    _min?: VeiculoAcessorioMinOrderByAggregateInput
    _sum?: VeiculoAcessorioSumOrderByAggregateInput
  }

  export type VeiculoAcessorioScalarWhereWithAggregatesInput = {
    AND?: VeiculoAcessorioScalarWhereWithAggregatesInput | VeiculoAcessorioScalarWhereWithAggregatesInput[]
    OR?: VeiculoAcessorioScalarWhereWithAggregatesInput[]
    NOT?: VeiculoAcessorioScalarWhereWithAggregatesInput | VeiculoAcessorioScalarWhereWithAggregatesInput[]
    veiculoId?: IntWithAggregatesFilter<"VeiculoAcessorio"> | number
    acessorioId?: IntWithAggregatesFilter<"VeiculoAcessorio"> | number
    descricao?: StringNullableWithAggregatesFilter<"VeiculoAcessorio"> | string | null
  }

  export type VeiculoCreateInput = {
    modelo: string
    marca: string
    ano: number
    placa: string
    acessorios?: VeiculoAcessorioCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUncheckedCreateInput = {
    id?: number
    modelo: string
    marca: string
    ano: number
    placa: string
    acessorios?: VeiculoAcessorioUncheckedCreateNestedManyWithoutVeiculoInput
  }

  export type VeiculoUpdateInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    acessorios?: VeiculoAcessorioUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    acessorios?: VeiculoAcessorioUncheckedUpdateManyWithoutVeiculoNestedInput
  }

  export type VeiculoCreateManyInput = {
    id?: number
    modelo: string
    marca: string
    ano: number
    placa: string
  }

  export type VeiculoUpdateManyMutationInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type AcessorioCreateInput = {
    nome: string
    veiculos?: VeiculoAcessorioCreateNestedManyWithoutAcessorioInput
  }

  export type AcessorioUncheckedCreateInput = {
    id?: number
    nome: string
    veiculos?: VeiculoAcessorioUncheckedCreateNestedManyWithoutAcessorioInput
  }

  export type AcessorioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    veiculos?: VeiculoAcessorioUpdateManyWithoutAcessorioNestedInput
  }

  export type AcessorioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    veiculos?: VeiculoAcessorioUncheckedUpdateManyWithoutAcessorioNestedInput
  }

  export type AcessorioCreateManyInput = {
    id?: number
    nome: string
  }

  export type AcessorioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AcessorioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoAcessorioCreateInput = {
    descricao?: string | null
    veiculo: VeiculoCreateNestedOneWithoutAcessoriosInput
    acessorio: AcessorioCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculoAcessorioUncheckedCreateInput = {
    veiculoId: number
    acessorioId: number
    descricao?: string | null
  }

  export type VeiculoAcessorioUpdateInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    veiculo?: VeiculoUpdateOneRequiredWithoutAcessoriosNestedInput
    acessorio?: AcessorioUpdateOneRequiredWithoutVeiculosNestedInput
  }

  export type VeiculoAcessorioUncheckedUpdateInput = {
    veiculoId?: IntFieldUpdateOperationsInput | number
    acessorioId?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoAcessorioCreateManyInput = {
    veiculoId: number
    acessorioId: number
    descricao?: string | null
  }

  export type VeiculoAcessorioUpdateManyMutationInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoAcessorioUncheckedUpdateManyInput = {
    veiculoId?: IntFieldUpdateOperationsInput | number
    acessorioId?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type VeiculoAcessorioListRelationFilter = {
    every?: VeiculoAcessorioWhereInput
    some?: VeiculoAcessorioWhereInput
    none?: VeiculoAcessorioWhereInput
  }

  export type VeiculoAcessorioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeiculoCountOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
  }

  export type VeiculoAvgOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
  }

  export type VeiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
  }

  export type VeiculoMinOrderByAggregateInput = {
    id?: SortOrder
    modelo?: SortOrder
    marca?: SortOrder
    ano?: SortOrder
    placa?: SortOrder
  }

  export type VeiculoSumOrderByAggregateInput = {
    id?: SortOrder
    ano?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type AcessorioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type AcessorioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcessorioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type AcessorioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type AcessorioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type VeiculoRelationFilter = {
    is?: VeiculoWhereInput
    isNot?: VeiculoWhereInput
  }

  export type AcessorioRelationFilter = {
    is?: AcessorioWhereInput
    isNot?: AcessorioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VeiculoAcessorioVeiculoIdAcessorioIdCompoundUniqueInput = {
    veiculoId: number
    acessorioId: number
  }

  export type VeiculoAcessorioCountOrderByAggregateInput = {
    veiculoId?: SortOrder
    acessorioId?: SortOrder
    descricao?: SortOrder
  }

  export type VeiculoAcessorioAvgOrderByAggregateInput = {
    veiculoId?: SortOrder
    acessorioId?: SortOrder
  }

  export type VeiculoAcessorioMaxOrderByAggregateInput = {
    veiculoId?: SortOrder
    acessorioId?: SortOrder
    descricao?: SortOrder
  }

  export type VeiculoAcessorioMinOrderByAggregateInput = {
    veiculoId?: SortOrder
    acessorioId?: SortOrder
    descricao?: SortOrder
  }

  export type VeiculoAcessorioSumOrderByAggregateInput = {
    veiculoId?: SortOrder
    acessorioId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type VeiculoAcessorioCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<VeiculoAcessorioCreateWithoutVeiculoInput, VeiculoAcessorioUncheckedCreateWithoutVeiculoInput> | VeiculoAcessorioCreateWithoutVeiculoInput[] | VeiculoAcessorioUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: VeiculoAcessorioCreateOrConnectWithoutVeiculoInput | VeiculoAcessorioCreateOrConnectWithoutVeiculoInput[]
    createMany?: VeiculoAcessorioCreateManyVeiculoInputEnvelope
    connect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
  }

  export type VeiculoAcessorioUncheckedCreateNestedManyWithoutVeiculoInput = {
    create?: XOR<VeiculoAcessorioCreateWithoutVeiculoInput, VeiculoAcessorioUncheckedCreateWithoutVeiculoInput> | VeiculoAcessorioCreateWithoutVeiculoInput[] | VeiculoAcessorioUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: VeiculoAcessorioCreateOrConnectWithoutVeiculoInput | VeiculoAcessorioCreateOrConnectWithoutVeiculoInput[]
    createMany?: VeiculoAcessorioCreateManyVeiculoInputEnvelope
    connect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VeiculoAcessorioUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<VeiculoAcessorioCreateWithoutVeiculoInput, VeiculoAcessorioUncheckedCreateWithoutVeiculoInput> | VeiculoAcessorioCreateWithoutVeiculoInput[] | VeiculoAcessorioUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: VeiculoAcessorioCreateOrConnectWithoutVeiculoInput | VeiculoAcessorioCreateOrConnectWithoutVeiculoInput[]
    upsert?: VeiculoAcessorioUpsertWithWhereUniqueWithoutVeiculoInput | VeiculoAcessorioUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: VeiculoAcessorioCreateManyVeiculoInputEnvelope
    set?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    disconnect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    delete?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    connect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    update?: VeiculoAcessorioUpdateWithWhereUniqueWithoutVeiculoInput | VeiculoAcessorioUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: VeiculoAcessorioUpdateManyWithWhereWithoutVeiculoInput | VeiculoAcessorioUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: VeiculoAcessorioScalarWhereInput | VeiculoAcessorioScalarWhereInput[]
  }

  export type VeiculoAcessorioUncheckedUpdateManyWithoutVeiculoNestedInput = {
    create?: XOR<VeiculoAcessorioCreateWithoutVeiculoInput, VeiculoAcessorioUncheckedCreateWithoutVeiculoInput> | VeiculoAcessorioCreateWithoutVeiculoInput[] | VeiculoAcessorioUncheckedCreateWithoutVeiculoInput[]
    connectOrCreate?: VeiculoAcessorioCreateOrConnectWithoutVeiculoInput | VeiculoAcessorioCreateOrConnectWithoutVeiculoInput[]
    upsert?: VeiculoAcessorioUpsertWithWhereUniqueWithoutVeiculoInput | VeiculoAcessorioUpsertWithWhereUniqueWithoutVeiculoInput[]
    createMany?: VeiculoAcessorioCreateManyVeiculoInputEnvelope
    set?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    disconnect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    delete?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    connect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    update?: VeiculoAcessorioUpdateWithWhereUniqueWithoutVeiculoInput | VeiculoAcessorioUpdateWithWhereUniqueWithoutVeiculoInput[]
    updateMany?: VeiculoAcessorioUpdateManyWithWhereWithoutVeiculoInput | VeiculoAcessorioUpdateManyWithWhereWithoutVeiculoInput[]
    deleteMany?: VeiculoAcessorioScalarWhereInput | VeiculoAcessorioScalarWhereInput[]
  }

  export type VeiculoAcessorioCreateNestedManyWithoutAcessorioInput = {
    create?: XOR<VeiculoAcessorioCreateWithoutAcessorioInput, VeiculoAcessorioUncheckedCreateWithoutAcessorioInput> | VeiculoAcessorioCreateWithoutAcessorioInput[] | VeiculoAcessorioUncheckedCreateWithoutAcessorioInput[]
    connectOrCreate?: VeiculoAcessorioCreateOrConnectWithoutAcessorioInput | VeiculoAcessorioCreateOrConnectWithoutAcessorioInput[]
    createMany?: VeiculoAcessorioCreateManyAcessorioInputEnvelope
    connect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
  }

  export type VeiculoAcessorioUncheckedCreateNestedManyWithoutAcessorioInput = {
    create?: XOR<VeiculoAcessorioCreateWithoutAcessorioInput, VeiculoAcessorioUncheckedCreateWithoutAcessorioInput> | VeiculoAcessorioCreateWithoutAcessorioInput[] | VeiculoAcessorioUncheckedCreateWithoutAcessorioInput[]
    connectOrCreate?: VeiculoAcessorioCreateOrConnectWithoutAcessorioInput | VeiculoAcessorioCreateOrConnectWithoutAcessorioInput[]
    createMany?: VeiculoAcessorioCreateManyAcessorioInputEnvelope
    connect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
  }

  export type VeiculoAcessorioUpdateManyWithoutAcessorioNestedInput = {
    create?: XOR<VeiculoAcessorioCreateWithoutAcessorioInput, VeiculoAcessorioUncheckedCreateWithoutAcessorioInput> | VeiculoAcessorioCreateWithoutAcessorioInput[] | VeiculoAcessorioUncheckedCreateWithoutAcessorioInput[]
    connectOrCreate?: VeiculoAcessorioCreateOrConnectWithoutAcessorioInput | VeiculoAcessorioCreateOrConnectWithoutAcessorioInput[]
    upsert?: VeiculoAcessorioUpsertWithWhereUniqueWithoutAcessorioInput | VeiculoAcessorioUpsertWithWhereUniqueWithoutAcessorioInput[]
    createMany?: VeiculoAcessorioCreateManyAcessorioInputEnvelope
    set?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    disconnect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    delete?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    connect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    update?: VeiculoAcessorioUpdateWithWhereUniqueWithoutAcessorioInput | VeiculoAcessorioUpdateWithWhereUniqueWithoutAcessorioInput[]
    updateMany?: VeiculoAcessorioUpdateManyWithWhereWithoutAcessorioInput | VeiculoAcessorioUpdateManyWithWhereWithoutAcessorioInput[]
    deleteMany?: VeiculoAcessorioScalarWhereInput | VeiculoAcessorioScalarWhereInput[]
  }

  export type VeiculoAcessorioUncheckedUpdateManyWithoutAcessorioNestedInput = {
    create?: XOR<VeiculoAcessorioCreateWithoutAcessorioInput, VeiculoAcessorioUncheckedCreateWithoutAcessorioInput> | VeiculoAcessorioCreateWithoutAcessorioInput[] | VeiculoAcessorioUncheckedCreateWithoutAcessorioInput[]
    connectOrCreate?: VeiculoAcessorioCreateOrConnectWithoutAcessorioInput | VeiculoAcessorioCreateOrConnectWithoutAcessorioInput[]
    upsert?: VeiculoAcessorioUpsertWithWhereUniqueWithoutAcessorioInput | VeiculoAcessorioUpsertWithWhereUniqueWithoutAcessorioInput[]
    createMany?: VeiculoAcessorioCreateManyAcessorioInputEnvelope
    set?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    disconnect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    delete?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    connect?: VeiculoAcessorioWhereUniqueInput | VeiculoAcessorioWhereUniqueInput[]
    update?: VeiculoAcessorioUpdateWithWhereUniqueWithoutAcessorioInput | VeiculoAcessorioUpdateWithWhereUniqueWithoutAcessorioInput[]
    updateMany?: VeiculoAcessorioUpdateManyWithWhereWithoutAcessorioInput | VeiculoAcessorioUpdateManyWithWhereWithoutAcessorioInput[]
    deleteMany?: VeiculoAcessorioScalarWhereInput | VeiculoAcessorioScalarWhereInput[]
  }

  export type VeiculoCreateNestedOneWithoutAcessoriosInput = {
    create?: XOR<VeiculoCreateWithoutAcessoriosInput, VeiculoUncheckedCreateWithoutAcessoriosInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutAcessoriosInput
    connect?: VeiculoWhereUniqueInput
  }

  export type AcessorioCreateNestedOneWithoutVeiculosInput = {
    create?: XOR<AcessorioCreateWithoutVeiculosInput, AcessorioUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: AcessorioCreateOrConnectWithoutVeiculosInput
    connect?: AcessorioWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VeiculoUpdateOneRequiredWithoutAcessoriosNestedInput = {
    create?: XOR<VeiculoCreateWithoutAcessoriosInput, VeiculoUncheckedCreateWithoutAcessoriosInput>
    connectOrCreate?: VeiculoCreateOrConnectWithoutAcessoriosInput
    upsert?: VeiculoUpsertWithoutAcessoriosInput
    connect?: VeiculoWhereUniqueInput
    update?: XOR<XOR<VeiculoUpdateToOneWithWhereWithoutAcessoriosInput, VeiculoUpdateWithoutAcessoriosInput>, VeiculoUncheckedUpdateWithoutAcessoriosInput>
  }

  export type AcessorioUpdateOneRequiredWithoutVeiculosNestedInput = {
    create?: XOR<AcessorioCreateWithoutVeiculosInput, AcessorioUncheckedCreateWithoutVeiculosInput>
    connectOrCreate?: AcessorioCreateOrConnectWithoutVeiculosInput
    upsert?: AcessorioUpsertWithoutVeiculosInput
    connect?: AcessorioWhereUniqueInput
    update?: XOR<XOR<AcessorioUpdateToOneWithWhereWithoutVeiculosInput, AcessorioUpdateWithoutVeiculosInput>, AcessorioUncheckedUpdateWithoutVeiculosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VeiculoAcessorioCreateWithoutVeiculoInput = {
    descricao?: string | null
    acessorio: AcessorioCreateNestedOneWithoutVeiculosInput
  }

  export type VeiculoAcessorioUncheckedCreateWithoutVeiculoInput = {
    acessorioId: number
    descricao?: string | null
  }

  export type VeiculoAcessorioCreateOrConnectWithoutVeiculoInput = {
    where: VeiculoAcessorioWhereUniqueInput
    create: XOR<VeiculoAcessorioCreateWithoutVeiculoInput, VeiculoAcessorioUncheckedCreateWithoutVeiculoInput>
  }

  export type VeiculoAcessorioCreateManyVeiculoInputEnvelope = {
    data: VeiculoAcessorioCreateManyVeiculoInput | VeiculoAcessorioCreateManyVeiculoInput[]
  }

  export type VeiculoAcessorioUpsertWithWhereUniqueWithoutVeiculoInput = {
    where: VeiculoAcessorioWhereUniqueInput
    update: XOR<VeiculoAcessorioUpdateWithoutVeiculoInput, VeiculoAcessorioUncheckedUpdateWithoutVeiculoInput>
    create: XOR<VeiculoAcessorioCreateWithoutVeiculoInput, VeiculoAcessorioUncheckedCreateWithoutVeiculoInput>
  }

  export type VeiculoAcessorioUpdateWithWhereUniqueWithoutVeiculoInput = {
    where: VeiculoAcessorioWhereUniqueInput
    data: XOR<VeiculoAcessorioUpdateWithoutVeiculoInput, VeiculoAcessorioUncheckedUpdateWithoutVeiculoInput>
  }

  export type VeiculoAcessorioUpdateManyWithWhereWithoutVeiculoInput = {
    where: VeiculoAcessorioScalarWhereInput
    data: XOR<VeiculoAcessorioUpdateManyMutationInput, VeiculoAcessorioUncheckedUpdateManyWithoutVeiculoInput>
  }

  export type VeiculoAcessorioScalarWhereInput = {
    AND?: VeiculoAcessorioScalarWhereInput | VeiculoAcessorioScalarWhereInput[]
    OR?: VeiculoAcessorioScalarWhereInput[]
    NOT?: VeiculoAcessorioScalarWhereInput | VeiculoAcessorioScalarWhereInput[]
    veiculoId?: IntFilter<"VeiculoAcessorio"> | number
    acessorioId?: IntFilter<"VeiculoAcessorio"> | number
    descricao?: StringNullableFilter<"VeiculoAcessorio"> | string | null
  }

  export type VeiculoAcessorioCreateWithoutAcessorioInput = {
    descricao?: string | null
    veiculo: VeiculoCreateNestedOneWithoutAcessoriosInput
  }

  export type VeiculoAcessorioUncheckedCreateWithoutAcessorioInput = {
    veiculoId: number
    descricao?: string | null
  }

  export type VeiculoAcessorioCreateOrConnectWithoutAcessorioInput = {
    where: VeiculoAcessorioWhereUniqueInput
    create: XOR<VeiculoAcessorioCreateWithoutAcessorioInput, VeiculoAcessorioUncheckedCreateWithoutAcessorioInput>
  }

  export type VeiculoAcessorioCreateManyAcessorioInputEnvelope = {
    data: VeiculoAcessorioCreateManyAcessorioInput | VeiculoAcessorioCreateManyAcessorioInput[]
  }

  export type VeiculoAcessorioUpsertWithWhereUniqueWithoutAcessorioInput = {
    where: VeiculoAcessorioWhereUniqueInput
    update: XOR<VeiculoAcessorioUpdateWithoutAcessorioInput, VeiculoAcessorioUncheckedUpdateWithoutAcessorioInput>
    create: XOR<VeiculoAcessorioCreateWithoutAcessorioInput, VeiculoAcessorioUncheckedCreateWithoutAcessorioInput>
  }

  export type VeiculoAcessorioUpdateWithWhereUniqueWithoutAcessorioInput = {
    where: VeiculoAcessorioWhereUniqueInput
    data: XOR<VeiculoAcessorioUpdateWithoutAcessorioInput, VeiculoAcessorioUncheckedUpdateWithoutAcessorioInput>
  }

  export type VeiculoAcessorioUpdateManyWithWhereWithoutAcessorioInput = {
    where: VeiculoAcessorioScalarWhereInput
    data: XOR<VeiculoAcessorioUpdateManyMutationInput, VeiculoAcessorioUncheckedUpdateManyWithoutAcessorioInput>
  }

  export type VeiculoCreateWithoutAcessoriosInput = {
    modelo: string
    marca: string
    ano: number
    placa: string
  }

  export type VeiculoUncheckedCreateWithoutAcessoriosInput = {
    id?: number
    modelo: string
    marca: string
    ano: number
    placa: string
  }

  export type VeiculoCreateOrConnectWithoutAcessoriosInput = {
    where: VeiculoWhereUniqueInput
    create: XOR<VeiculoCreateWithoutAcessoriosInput, VeiculoUncheckedCreateWithoutAcessoriosInput>
  }

  export type AcessorioCreateWithoutVeiculosInput = {
    nome: string
  }

  export type AcessorioUncheckedCreateWithoutVeiculosInput = {
    id?: number
    nome: string
  }

  export type AcessorioCreateOrConnectWithoutVeiculosInput = {
    where: AcessorioWhereUniqueInput
    create: XOR<AcessorioCreateWithoutVeiculosInput, AcessorioUncheckedCreateWithoutVeiculosInput>
  }

  export type VeiculoUpsertWithoutAcessoriosInput = {
    update: XOR<VeiculoUpdateWithoutAcessoriosInput, VeiculoUncheckedUpdateWithoutAcessoriosInput>
    create: XOR<VeiculoCreateWithoutAcessoriosInput, VeiculoUncheckedCreateWithoutAcessoriosInput>
    where?: VeiculoWhereInput
  }

  export type VeiculoUpdateToOneWithWhereWithoutAcessoriosInput = {
    where?: VeiculoWhereInput
    data: XOR<VeiculoUpdateWithoutAcessoriosInput, VeiculoUncheckedUpdateWithoutAcessoriosInput>
  }

  export type VeiculoUpdateWithoutAcessoriosInput = {
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoUncheckedUpdateWithoutAcessoriosInput = {
    id?: IntFieldUpdateOperationsInput | number
    modelo?: StringFieldUpdateOperationsInput | string
    marca?: StringFieldUpdateOperationsInput | string
    ano?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
  }

  export type AcessorioUpsertWithoutVeiculosInput = {
    update: XOR<AcessorioUpdateWithoutVeiculosInput, AcessorioUncheckedUpdateWithoutVeiculosInput>
    create: XOR<AcessorioCreateWithoutVeiculosInput, AcessorioUncheckedCreateWithoutVeiculosInput>
    where?: AcessorioWhereInput
  }

  export type AcessorioUpdateToOneWithWhereWithoutVeiculosInput = {
    where?: AcessorioWhereInput
    data: XOR<AcessorioUpdateWithoutVeiculosInput, AcessorioUncheckedUpdateWithoutVeiculosInput>
  }

  export type AcessorioUpdateWithoutVeiculosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AcessorioUncheckedUpdateWithoutVeiculosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type VeiculoAcessorioCreateManyVeiculoInput = {
    acessorioId: number
    descricao?: string | null
  }

  export type VeiculoAcessorioUpdateWithoutVeiculoInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    acessorio?: AcessorioUpdateOneRequiredWithoutVeiculosNestedInput
  }

  export type VeiculoAcessorioUncheckedUpdateWithoutVeiculoInput = {
    acessorioId?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoAcessorioUncheckedUpdateManyWithoutVeiculoInput = {
    acessorioId?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoAcessorioCreateManyAcessorioInput = {
    veiculoId: number
    descricao?: string | null
  }

  export type VeiculoAcessorioUpdateWithoutAcessorioInput = {
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    veiculo?: VeiculoUpdateOneRequiredWithoutAcessoriosNestedInput
  }

  export type VeiculoAcessorioUncheckedUpdateWithoutAcessorioInput = {
    veiculoId?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VeiculoAcessorioUncheckedUpdateManyWithoutAcessorioInput = {
    veiculoId?: IntFieldUpdateOperationsInput | number
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use VeiculoCountOutputTypeDefaultArgs instead
     */
    export type VeiculoCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AcessorioCountOutputTypeDefaultArgs instead
     */
    export type AcessorioCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AcessorioCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VeiculoDefaultArgs instead
     */
    export type VeiculoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AcessorioDefaultArgs instead
     */
    export type AcessorioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AcessorioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VeiculoAcessorioDefaultArgs instead
     */
    export type VeiculoAcessorioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VeiculoAcessorioDefaultArgs<ExtArgs>

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